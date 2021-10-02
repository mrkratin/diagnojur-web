import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import {
  AboutProcessCreate,
  DiagnosisStatusEnum,
  Diagnostic
} from '../../../models';
import {
  DjForms,
  PartPolo,
  partPolos,
  PartType,
  partTypes,
  ProceduralInformation,
  ProcessDegree,
  ProcessDegreeEnum,
  processDegrees,
  ProcessOrgan,
  ProcessOrganEnum,
  processOrgans,
  ProcessResourceType,
  processResourceTypes,
  SolicitationTypeEnum
} from '../../../../shared/models';
import {
  AboutProcessService,
  PartService,
  ProcessEventService
} from '../../../services';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'dj-diagnostic-answer',
  templateUrl: './diagnostic-answer.component.html',
  styleUrls: ['./diagnostic-answer.component.css']
})
export class DiagnosticAnswerComponent implements OnInit {
  @Input()
  diagnostic: Diagnostic;
  formGroup: FormGroup;
  aboutFormGroup: FormGroup;
  pTypes: PartType[] = partTypes;
  pPolos: PartPolo[] = partPolos;
  pDegrees: ProcessDegree[] = processDegrees.filter(
    value => value.value !== ProcessDegreeEnum.UNKNOWN
  );
  pOrgans: ProcessOrgan[] = processOrgans.filter(
    value => value.value !== ProcessOrganEnum.UNKNOWN
  );
  pResourceTypes: ProcessResourceType[] = processResourceTypes;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: NzMessageService,
    private partService: PartService,
    private processEventService: ProcessEventService,
    private aboutProcessService: AboutProcessService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  get showProcessResource(): boolean {
    const degree: ProcessDegreeEnum = this.aboutFormGroup.value.degree;
    return degree !== ProcessDegreeEnum.FIRST;
  }

  // region Parts

  get partsControls(): AbstractControl[] {
    return (this.formGroup.controls.parts as FormArray).controls;
  }

  savePart(formGroup: FormGroup) {
    const part: any = formGroup.value;
    formGroup.controls.isLoading.setValue(true);
    if (part.id) {
      this.partService.update(part).subscribe(response => {
        formGroup.controls.isLoading.setValue(false);
        formGroup.controls.change.setValue(false);
        this.savePartSuccessfully();
      });
    } else {
      part.diagnosis = this.diagnostic.id;
      this.partService.insert(part).subscribe(response => {
        formGroup.controls.id.setValue(response.data.id);
        formGroup.controls.isLoading.setValue(false);
        formGroup.controls.change.setValue(false);
        this.savePartSuccessfully();
      });
    }
  }

  removePart(formGroup: FormGroup) {
    const part: any = formGroup.value;
    if (part.id) {
      formGroup.controls.isLoading.setValue(true);
      this.partService.delete(part.id).subscribe(response => {
        formGroup.controls.isLoading.setValue(false);
        const partsForm: FormArray = this.formGroup.controls.parts as FormArray;
        partsForm.removeAt(partsForm.controls.indexOf(formGroup));
      });
    } else {
      const partsForm: FormArray = this.formGroup.controls.parts as FormArray;
      partsForm.removeAt(partsForm.controls.indexOf(formGroup));
    }
  }

  addPart() {
    const partsForm: FormArray = this.formGroup.controls.parts as FormArray;
    partsForm.push(this.getPartForm());
  }

  get disabledAddPartBtn(): boolean {
    return this.formGroup
      ? (this.formGroup.controls.parts as FormArray).length >= 40
      : true;
  }

  get disabledAddProcessEventBtn(): boolean {
    const index: number = (this.formGroup.controls.processEvents as FormArray)
      .length;
    if (this.diagnostic.solicitation.type === SolicitationTypeEnum.SPECIFIC) {
      return index === 1;
    } else if (
      this.diagnostic.solicitation.type === SolicitationTypeEnum.SIMPLE
    ) {
      return index === 3;
    } else {
      return false;
    }
  }

  get editDiagnostic(): boolean {
    return this.diagnostic.status !== DiagnosisStatusEnum.COMPLETED;
  }

  get organs(): ProcessOrgan[] {
    if (this.aboutFormGroup.value.degree === ProcessDegreeEnum.UNKNOWN) {
      return this.pOrgans;
    }
    return this.pOrgans.filter(
      value =>
        this.aboutFormGroup.value.degree === value.degree ||
        value.value === ProcessOrganEnum.UNKNOWN
    );
  }

  saveProcessEvent(formGroup: FormGroup) {
    const processEvent: any = formGroup.value;
    formGroup.controls.isLoading.setValue(true);
    if (processEvent.id) {
      this.processEventService.update(processEvent).subscribe(response => {
        formGroup.controls.isLoading.setValue(false);
        formGroup.controls.change.setValue(false);
        this.saveProcessEventSuccessfully();
      });
    } else {
      processEvent.diagnosis = this.diagnostic.id;
      this.processEventService.insert(processEvent).subscribe(response => {
        formGroup.controls.id.setValue(response.data.id);
        formGroup.controls.isLoading.setValue(false);
        formGroup.controls.change.setValue(false);
        this.saveProcessEventSuccessfully();
      });
    }
  }

  // endregion Parts

  // region ProcessEvents

  get peControls(): AbstractControl[] {
    return (this.formGroup.controls.processEvents as FormArray).controls;
  }

  removeProcessEvent(formGroup: FormGroup) {
    const processEvent: any = formGroup.value;
    if (processEvent.id) {
      formGroup.controls.isLoading.setValue(true);
      this.processEventService.delete(processEvent.id).subscribe(response => {
        formGroup.controls.isLoading.setValue(false);
        const processEventsForm: FormArray = this.formGroup.controls
          .processEvents as FormArray;
        processEventsForm.removeAt(
          processEventsForm.controls.indexOf(formGroup)
        );
      });
    } else {
      const processEventsForm: FormArray = this.formGroup.controls
        .processEvents as FormArray;
      processEventsForm.removeAt(processEventsForm.controls.indexOf(formGroup));
    }
  }

  addProcessEvent() {
    const processEventsForm: FormArray = this.formGroup.controls
      .processEvents as FormArray;
    processEventsForm.push(this.getProcessEventForm());
  }

  saveAboutProcess() {
    this.aboutFormGroup.controls.isLoading.setValue(true);
    if (this.diagnostic.proceduralInformation) {
      this.updatingAboutProcess();
    } else {
      this.savingAboutProcess();
    }
  }

  private initProcessEventForm(): FormArray {
    const processEventForm: FormArray = this.formBuilder.array([]);
    if (this.diagnostic.processEvents.length > 0) {
      this.diagnostic.processEvents.forEach(processEvent => {
        const fg: FormGroup = this.formBuilder.group({
          id: processEvent.id,
          title: DjForms.ProcessEventTitle(processEvent.title),
          description: DjForms.ProcessEventDescription(
            processEvent.description
          ),
          dateOccurrence: DjForms.ProcessEventDateOccurrence(
            processEvent.dateOccurrence
          ),
          change: false,
          isLoading: false
        });
        this.valueChangesProcessEvents(fg);
        processEventForm.push(fg);
      });
    } else {
      processEventForm.push(this.getProcessEventForm());
    }
    return processEventForm;
  }

  private getProcessEventForm(): FormGroup {
    const fg: FormGroup = this.formBuilder.group({
      id: undefined,
      title: DjForms.ProcessEventTitle(),
      description: DjForms.ProcessEventDescription(),
      dateOccurrence: DjForms.ProcessEventDateOccurrence(),
      change: false,
      isLoading: false
    });
    this.valueChangesProcessEvents(fg);
    return fg;
  }

  private initPartForm(): FormArray {
    const partForm: FormArray = this.formBuilder.array([]);
    if (this.diagnostic.parts.length > 0) {
      this.diagnostic.parts.forEach(part => {
        const fg: FormGroup = this.formBuilder.group({
          id: part.id,
          name: DjForms.PartName(part.name),
          type: part.type,
          polo: part.polo,
          oabNumber: part.oab ? part.oab.oab : undefined,
          oabUf: part.oab ? part.oab.uf : undefined,
          change: false,
          isLoading: false
        });
        this.valueChangesParts(fg);
        partForm.push(fg);
      });
    } else {
      partForm.push(this.getPartForm());
    }
    return partForm;
  }

  private getPartForm(): FormGroup {
    const fg: FormGroup = this.formBuilder.group({
      id: undefined,
      name: DjForms.PartName(),
      type: [partTypes[0].value, [Validators.required]],
      polo: [partPolos[0].value, [Validators.required]],
      oabNumber: '',
      oabUf: '',
      change: false,
      isLoading: false
    });
    this.valueChangesParts(fg);
    return fg;
  }

  private savePartSuccessfully() {
    this.messageService.success('Parte salva com sucesso');
  }

  // endregion ProcessEvents

  private valueChangesParts(fg: FormGroup) {
    fg.controls.name.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.type.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.polo.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.oabNumber.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.oabUf.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
  }

  private saveProcessEventSuccessfully() {
    this.messageService.success('Evento do Processo salvo com sucesso');
  }

  private valueChangesProcessEvents(fg: FormGroup) {
    fg.controls.title.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.description.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
    fg.controls.dateOccurrence.valueChanges.subscribe(() =>
      fg.controls.change.setValue(true)
    );
  }

  private updatingAboutProcess() {
    const aboutProcess: ProceduralInformation = {
      judgesName: this.aboutFormGroup.value.judgesName,
      id: this.aboutFormGroup.value.id,
      processingOrgan: this.aboutFormGroup.value.processingOrgan,
      resource: this.aboutFormGroup.value.resource,
      organ: this.aboutFormGroup.value.organ
        ? this.aboutFormGroup.value.organ
        : undefined,
      degree: this.aboutFormGroup.value.degree
        ? this.aboutFormGroup.value.degree
        : undefined,
      // @ts-ignore
      diagnosis: this.diagnostic.id
    };
    this.aboutProcessService.update(aboutProcess).subscribe(
      () => {
        this.aboutFormGroup.controls.isLoading.setValue(false);
        this.aboutFormGroup.controls.change.setValue(false);
      },
      () => this.aboutFormGroup.controls.isLoading.setValue(false)
    );
  }

  private savingAboutProcess() {
    const aboutProcess: AboutProcessCreate = {
      judgesName: this.aboutFormGroup.value.judgesName,
      diagnosis: this.diagnostic.id,
      processingOrgan: this.aboutFormGroup.value.processingOrgan,
      resource: this.aboutFormGroup.value.resource,
      organ: this.aboutFormGroup.value.organ
        ? this.aboutFormGroup.value.organ
        : undefined,
      degree: this.aboutFormGroup.value.degree
        ? this.aboutFormGroup.value.degree
        : undefined
    };
    this.aboutProcessService.save(aboutProcess).subscribe(
      response => {
        this.aboutFormGroup.controls.id.setValue(response.data.id);
        this.diagnostic.proceduralInformation = response.data;
        this.aboutFormGroup.controls.isLoading.setValue(false);
        this.aboutFormGroup.controls.change.setValue(false);
      },
      () => this.aboutFormGroup.controls.isLoading.setValue(false)
    );
  }

  private initForm() {
    this.aboutFormGroup = this.formBuilder.group({
      id: this.diagnostic.proceduralInformation
        ? this.diagnostic.proceduralInformation.id
        : undefined,
      processingOrgan: [
        this.diagnostic.proceduralInformation
          ? this.diagnostic.proceduralInformation.processingOrgan
          : undefined,
        [Validators.required]
      ],
      judgesName: DjForms.judgesName(
        this.diagnostic.proceduralInformation
          ? this.diagnostic.proceduralInformation.judgesName
          : undefined
      ),
      resource: [
        this.diagnostic.proceduralInformation
          ? this.diagnostic.proceduralInformation.resource
          : this.pResourceTypes[10].value,
        [Validators.required]
      ],
      degree: [
        this.diagnostic.proceduralInformation
          ? this.diagnostic.proceduralInformation.degree
            ? this.diagnostic.proceduralInformation.degree
            : this.pDegrees[0].value
          : this.pDegrees[0].value
      ],
      organ: [
        this.diagnostic.proceduralInformation
          ? this.diagnostic.proceduralInformation.organ
            ? this.diagnostic.proceduralInformation.organ
            : this.pOrgans[0].value
          : this.pOrgans[0].value
      ],
      isLoading: false,
      change: false
    });
    this.aboutFormGroup.controls.processingOrgan.valueChanges.subscribe(() =>
      this.aboutFormGroup.controls.change.setValue(true)
    );
    this.aboutFormGroup.controls.resource.valueChanges.subscribe(() =>
      this.aboutFormGroup.controls.change.setValue(true)
    );
    this.aboutFormGroup.controls.judgesName.valueChanges.subscribe(() =>
      this.aboutFormGroup.controls.change.setValue(true)
    );
    this.aboutFormGroup.controls.organ.valueChanges.subscribe(() =>
      this.aboutFormGroup.controls.change.setValue(true)
    );
    this.aboutFormGroup.controls.degree.valueChanges.subscribe(value => {
      this.aboutFormGroup.controls.change.setValue(true);
      if (value === ProcessDegreeEnum.UNKNOWN) {
        this.aboutFormGroup.controls.organ.setValue(this.pOrgans[0].value);
      } else {
        this.aboutFormGroup.controls.organ.setValue(
          this.pOrgans.filter(organ => {
            return organ.degree === value;
          })[0].value
        );
      }
    });
    this.formGroup = this.formBuilder.group({
      id: this.diagnostic.id,
      status: this.diagnostic.status,
      parts: this.initPartForm(),
      processEvents: this.initProcessEventForm()
    });
  }
}
