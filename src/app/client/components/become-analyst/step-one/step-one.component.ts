import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

import {
  Bank,
  DjForms,
  Person,
  provinceUf,
  Telephone
} from '../../../../shared/models';
import { BankService, PersonService } from '../../../../shared/services';
import { SelectBankModalComponent } from '../../../../shared/components';
import { TelephoneService } from 'src/app/client/services';

@Component({
  selector: 'dj-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Output()
  sendLockNext: EventEmitter<boolean> = new EventEmitter();
  @Input()
  fg: FormGroup;
  person: Person;
  ufs: string[];
  bank: Bank;
  telephones: Telephone[];
  nzModalRef: NzModalRef;
  bankModalEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: PersonService,
    private readonly bankService: BankService,
    private readonly modalService: NzModalService,
    private readonly telephoneService: TelephoneService
  ) {}

  get lockNext(): boolean {
    return (
      this.fg.invalid ||
      (!this.fg.value.civel && !this.fg.value.criminal && !this.fg.value.labor)
    );
  }

  ngOnInit() {
    this.ufs = [];
    provinceUf().forEach((value, key) => this.ufs.push(key));

    if (this.fg === undefined) {
      this.initProfile();
    } else {
      this.service.find().subscribe(response => {
        this.person = response.data;

        this.telephoneService.findAll().subscribe(responseTel => {
          this.telephones = responseTel.data;
        });
      });

      this.bankService.findById(this.fg.value.bank).subscribe(response => {
        this.bank = response.data;
      });
    }
  }

  openSelectBank() {
    this.bankModalEventEmitter.subscribe(bank => {
      this.bank = bank;
      this.fg.controls.bank.setValue(bank.id);
    });
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Tipos de Diagnósticos',
      nzContent: SelectBankModalComponent,

      nzAfterClose: this.bankModalEventEmitter
    });
  }

  getFormGroup(): FormGroup {
    return this.fg.valid ? this.fg : undefined;
  }

  private initForm() {
    if (!this.fg) {
      this.fg = this.formBuilder.group({
        name: DjForms.Name(this.person.name),
        cpf: DjForms.CPF(this.person.cpf),
        oabNumber: DjForms.OabNumber(),
        oabUf: DjForms.OabUF(this.ufs[0]),
        civel: [false],
        criminal: [false],
        labor: [false],
        bank: ['', [Validators.required]],
        agency: ['', [Validators.required]],
        account: ['', [Validators.required]],
        digit: [''],
        stateCode1: [
          this.telephones.length >= 1 ? this.telephones[0].stateCode : '',
          [
            Validators.minLength(2),
            Validators.maxLength(2),
            Validators.required
          ]
        ],
        telephone1: [
          this.telephones.length >= 1 ? this.telephones[0].telephone : '',
          [
            Validators.minLength(8),
            Validators.maxLength(9),
            Validators.required
          ]
        ],
        stateCode2: [
          this.telephones.length > 1 ? this.telephones[1].stateCode : '',
          [Validators.minLength(2), Validators.maxLength(2)]
        ],
        telephone2: [
          this.telephones.length > 1 ? this.telephones[1].telephone : '',
          [Validators.minLength(8), Validators.maxLength(9)]
        ]
      });

      this.sendLockNext.emit(this.lockNext);

      this.fg.valueChanges.subscribe(() => {
        this.sendLockNext.emit(this.lockNext);
      });
    }
  }

  private initProfile() {
    this.service.find().subscribe(response => {
      this.person = response.data;

      this.telephoneService.findAll().subscribe(responseTel => {
        this.telephones = responseTel.data;

        this.initForm();
      });
    });
  }
}
