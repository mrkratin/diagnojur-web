import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { StepOneComponent } from './step-one/step-one.component';
import { AnalystCreate, DocumentTypeEnum } from '../../models';
import { ProcessTypeEnum } from '../../../shared/models';
import { StepTwoComponent } from './step-two/step-two.component';
import { AnalystService } from '../../services';
import { NzMessageService } from 'ng-zorro-antd';
import { CreateTelephone } from 'src/app/auth/models';

@Component({
  selector: 'dj-become-analyst',
  templateUrl: './become-analyst.component.html',
  styleUrls: ['./become-analyst.component.css']
})
export class BecomeAnalystComponent implements OnInit {
  @ViewChild(StepOneComponent, { static: false })
  stepOne: StepOneComponent;
  @ViewChild(StepTwoComponent, { static: false })
  stepTwo: StepTwoComponent;
  me: any;

  readonly maxSteps = 2;
  current = 0;
  analyst: AnalystCreate;
  lockNext = true;
  isLoading: boolean;
  formGroupOne: FormGroup = undefined;

  constructor(
    private location: Location,
    private service: AnalystService,
    private messageService: NzMessageService
  ) {}

  get disabledBack(): boolean {
    return false;
  }

  get disabledNext(): boolean {
    return this.lockNext;
  }

  get disabledFinish(): boolean {
    return this.lockNext;
  }

  onBack() {
    this.location.back();
  }

  ngOnInit() {
    this.service.me().subscribe(response => (this.me = response.data));

    this.analyst = {
      bankAccount: undefined,
      documents: undefined,
      name: undefined,
      oab: undefined,
      specialties: undefined,
      telephones: undefined
    };
  }

  getFormGroup() {
    if (this.current === 0) {
      this.getCurrentOne();
    } else if (this.current === 1) {
      this.getCurrentTwo();
    }
  }

  getLockNext(value: boolean) {
    this.lockNext = value;
  }

  finish() {
    this.initAnalyst();
  }

  back() {
    this.current--;
  }

  next() {
    this.getFormGroup();
    this.current++;
  }

  private initAnalyst() {
    this.isLoading = true;
    this.service.insert(this.analyst).subscribe(
      () => {
        this.isLoading = false;
        this.current++;
        this.messageService.success(
          'Cadastro de Analista solicitado com sucesso'
        );
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  private getCurrentOne() {
    this.formGroupOne = this.stepOne.getFormGroup();

    this.analyst.name = this.formGroupOne.get('name').value;

    this.analyst.oab = {
      id: undefined,
      oab: this.formGroupOne.get('oabNumber').value,
      uf: this.formGroupOne.get('oabUf').value
    };

    const specialties: ProcessTypeEnum[] = [];
    if (this.formGroupOne.get('civel').value) {
      specialties.push(ProcessTypeEnum.CIVEL);
    }
    if (this.formGroupOne.get('criminal').value) {
      specialties.push(ProcessTypeEnum.CRIMINAL);
    }
    if (this.formGroupOne.get('labor').value) {
      specialties.push(ProcessTypeEnum.LABOR);
    }

    this.analyst.specialties = specialties;

    this.analyst.bankAccount = {
      account: this.formGroupOne.get('account').value,
      agency: this.formGroupOne.get('agency').value,
      digit: this.formGroupOne.get('digit').value
        ? this.formGroupOne.get('digit').value
        : undefined,
      bank: this.formGroupOne.get('bank').value
    };

    this.analyst.telephones = [
      {
        countryCode: '55',
        stateCode: this.formGroupOne.get('stateCode1').value,
        telephone: this.formGroupOne.get('telephone1').value
      },
      this.formGroupOne.get('stateCode2').value &&
      this.formGroupOne.get('telephone2').value
        ? {
            countryCode: '55',
            stateCode: this.formGroupOne.get('stateCode2').value,
            telephone: this.formGroupOne.get('telephone2').value
          }
        : undefined
    ];
  }

  private getCurrentTwo() {
    const documents: Map<DocumentTypeEnum, string> = this.stepTwo.documents;
    this.analyst.documents = [];
    documents.forEach((secretKey, type) => {
      this.analyst.documents.push({ secretKey, type });
    });
  }
}
