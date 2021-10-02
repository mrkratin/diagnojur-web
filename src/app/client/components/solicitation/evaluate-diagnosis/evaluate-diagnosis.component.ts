import { Component, EventEmitter, OnInit } from '@angular/core';
import { Diagnosis, Evaluation } from '../../../models';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluateService } from '../../../services';

@Component({
  selector: 'dj-evaluate-diagnosis',
  templateUrl: './evaluate-diagnosis.component.html',
  styleUrls: ['./evaluate-diagnosis.component.css']
})
export class EvaluateDiagnosisComponent implements OnInit {
  diagnosis: Diagnosis;
  isLoading = false;
  formGroup: FormGroup;
  descriptions: string[] = ['Ruim', 'Regular', 'Bom', 'Ótimo', 'Excelente'];
  emitter: EventEmitter<Evaluation>;

  constructor(
    public nzModalRef: NzModalRef,
    private formBuilder: FormBuilder,
    private service: EvaluateService,
    private messageService: NzMessageService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  evaluateDiagnosis() {
    if (this.formGroup.valid) {
      this.isLoading = true;
      this.service.evaluate(this.formGroup.value).subscribe(response => {
        this.isLoading = false;
        this.emitter.emit(response.data);
        this.messageService.success('Avaliação realizada com sucesso. Obrigado pelo feedback!');
        this.nzModalRef.close();
      });
    }
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      diagnosis: [this.diagnosis.id, [Validators.required]],
      rate: [5, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }
}
