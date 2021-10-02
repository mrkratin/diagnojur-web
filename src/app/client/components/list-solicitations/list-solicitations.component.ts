import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { saveAs } from 'file-saver/dist/FileSaver';

import { SmallSolicitation, solicitationStatusEnum, SolicitationStatusEnum } from '../../models';
import { Direction, Page } from '../../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitationService } from '../../services';
import { SolicitationTimelineComponent } from '../solicitation-timeline';

@Component({
  selector: 'dj-list-solicitations',
  templateUrl: './list-solicitations.component.html',
  styleUrls: ['./list-solicitations.component.css']
})
export class ListSolicitationsComponent implements OnInit, AfterContentInit {
  isCollapsed = true;
  solicitations: Page<SmallSolicitation> = undefined;
  formGroup: FormGroup;
  directions: Direction[] = [Direction.DESC, Direction.ASC];
  status: SolicitationStatusEnum[] = solicitationStatusEnum;
  finalized: SolicitationStatusEnum = SolicitationStatusEnum.FINALIZED;
  dProvided: SolicitationStatusEnum = SolicitationStatusEnum.DIAGNOSTIC_PROVIDED;
  rProvided: SolicitationStatusEnum = SolicitationStatusEnum.REPLY_PROVIDED;
  nzModalRef: NzModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private service: SolicitationService,
    private modalService: NzModalService,
    private location: Location
  ) {}

  ngOnInit() {}

  onBack() {
    this.location.back();
  }

  ngAfterContentInit(): void {
    this.initForm();
    this.initSolicitations();
  }

  showTimeline(solicitation: SmallSolicitation) {
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Timeline e evolução da Solicitação ' + solicitation.id,
      nzContent: SolicitationTimelineComponent,
      nzComponentParams: {
        solicitationId: solicitation.id
      },
      nzFooter: [
        {
          label: 'Fechar',
          type: 'primary',
          onClick: (timeline: SolicitationTimelineComponent) => {
            timeline.nzModalRef.destroy();
          }
        }
      ]
    });
  }

  download(solicitation: SmallSolicitation) {
    this.service.download(solicitation.diagnosis).subscribe(data => {
      const blob: Blob = new Blob([data.body], { type: data.body.type });
      const url = window.URL.createObjectURL(blob);
      saveAs(blob, 'report_diagnosis' + solicitation.diagnosis + '.pdf');
      window.open(url);
    });
  }

  pageChange(page: number) {
    this.formGroup.controls.page.setValue(page - 1);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      size: [5, [Validators.required, Validators.min(5), Validators.max(20)]],
      page: [0, [Validators.required]],
      status: [''],
      orderBy: ['creationDate', [Validators.required]],
      direction: this.directions[0],
      processNumber: ['', [Validators.minLength(1), Validators.maxLength(20)]]
    });
    this.formGroup.valueChanges.subscribe(value => {
      if (this.formGroup.valid) {
        this.initSolicitations();
      }
    });
  }

  private initSolicitations() {
    this.service
      .findPage(
        this.formGroup.controls.page.value,
        this.formGroup.controls.size.value,
        this.formGroup.controls.direction.value,
        this.formGroup.controls.status.value,
        this.formGroup.controls.processNumber.value
      )
      .subscribe(response => {
        this.solicitations = response.data;
      });
  }
}
