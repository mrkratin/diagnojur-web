import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { BankService } from '../../services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bank } from '../../models';

@Component({
  selector: 'dj-select-bank-modal',
  templateUrl: './select-bank-modal.component.html',
  styleUrls: ['./select-bank-modal.component.css']
})
export class SelectBankModalComponent implements OnInit {
  fg: FormGroup;
  banks: Bank[] = [];
  loading = false;
  // @Input()
  // fb: FormBuilder;
  // @Input()
  // service: BankService;

  constructor(
    public nzModalRef: NzModalRef,
    private fb: FormBuilder,
    private service: BankService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.fg = this.fb.group({ bank: '' });

    this.search('');

    this.fg.controls.bank.valueChanges.subscribe(this.search);
  }

  private search = bank => {
    this.loading = true;
    this.service.findByDescription(0, 5, bank).subscribe(
      response => {
        this.banks = response.data.content;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  };

  destroyModal(bank?: Bank) {
    this.nzModalRef.close(bank);
  }
}
