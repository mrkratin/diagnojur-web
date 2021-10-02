import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Direction, DjForms, Page } from '../../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiagnosisService } from '../../services';
import { DiagnosisStatusEnum, SmallDiagnosis } from '../../models';

@Component({
  selector: 'dj-list-diagnosis',
  templateUrl: './list-diagnosis.component.html',
  styleUrls: ['./list-diagnosis.component.css']
})
export class ListDiagnosisComponent implements OnInit {
  formGroup: FormGroup;
  isLoading: boolean;
  isCollapsedForm = true;
  diagnosis: Page<SmallDiagnosis>;
  directions: Direction[] = [Direction.DESC, Direction.ASC];

  constructor(private location: Location, private formBuilder: FormBuilder, private service: DiagnosisService) {}

  ngOnInit() {
    this.initForm();
    this.initDiagnosis();
  }

  onBack() {
    this.location.back();
  }

  pageChange(page: number) {
    this.formGroup.controls.page.setValue(page - 1);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      size: [5, [Validators.required, Validators.min(5), Validators.max(20)]],
      page: [0, [Validators.required]],
      status: [DiagnosisStatusEnum.COMPLETED, [Validators.required]],
      orderBy: ['creationDate', [Validators.required]],
      direction: this.directions[0],
      processNumber: DjForms.ProcessNumber()
    });
    this.formGroup.valueChanges.subscribe(value => {
      if (this.formGroup.valid) {
        this.initDiagnosis();
      }
    });
  }

  private initDiagnosis() {
    this.service
      .findPage(
        this.formGroup.controls.page.value,
        this.formGroup.controls.size.value,
        this.formGroup.controls.direction.value,
        this.formGroup.controls.status.value
      )
      .subscribe(response => {
        this.diagnosis = response.data;
      });
  }
}
