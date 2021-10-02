import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import {
  Analyst,
  ProcessTypeEnum,
  provinceUf,
  DjForms,
  Bank,
  BankService
} from '../../../../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalystStatusEnum } from '../../../models';

@Component({
  selector: 'dj-analyst',
  templateUrl: './analyst.component.html',
  styleUrls: ['./analyst.component.css']
})
export class AnalystComponent implements OnInit {
  analyst: Analyst;
  isLoading = false;
  formGroup: FormGroup;
  ufs: string[];
  banks: Bank[] = [];
  banksIsLoading = false;

  constructor(
    private readonly storage: ProfileDataService,
    private formBuilder: FormBuilder,
    private bankService: BankService
  ) {}

  save() {}

  ngOnInit() {
    this.ufs = [];
    provinceUf().forEach((value, key) => this.ufs.push(key));
    this.analyst = this.storage.profile.analyst;
    this.initForm();
  }

  searchBank(bank: string) {
    this.banksIsLoading = true;
    this.bankService.findByDescription(0, 5, bank).subscribe(
      response => {
        this.banksIsLoading = false;
        this.banks = response.data.content;
      },
      () => {
        this.banksIsLoading = false;
        this.banks = [];
      }
    );
  }

  private initForm() {
    this.banks.push(this.analyst.bankAccount.bank);
    this.formGroup = this.formBuilder.group({
      oabNumber: DjForms.OabNumber(this.analyst.oab.oab),
      oabUf: DjForms.OabUF(this.analyst.oab.uf),
      status: [this.analyst.status === AnalystStatusEnum.AVAILABLE],
      civel: this.analyst.specialties.includes(ProcessTypeEnum.CIVEL),
      criminal: this.analyst.specialties.includes(ProcessTypeEnum.CRIMINAL),
      labor: this.analyst.specialties.includes(ProcessTypeEnum.LABOR),
      bank: [this.analyst.bankAccount.bank.id, [Validators.required]],
      agency: [this.analyst.bankAccount.agency, [Validators.required]],
      account: [this.analyst.bankAccount.account, [Validators.required]],
      digit: [this.analyst.bankAccount.digit]
    });
  }
}
