import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';

import { SolicitationReply } from '../../../models';
import { DjForms } from '../../../../shared/models';
import { ReplyService } from '../../../services';

@Component({
  selector: 'dj-solicitation-reply-answer',
  templateUrl: './solicitation-reply-answer.component.html',
  styleUrls: ['./solicitation-reply-answer.component.css']
})
export class SolicitationReplyAnswerComponent implements OnInit {
  isLoading: boolean;
  solicitationReply: SolicitationReply;
  formGroup: FormGroup;

  constructor(
    public nzModalRef: NzModalRef,
    private formBuilder: FormBuilder,
    private location: Location,
    private service: ReplyService,
    private messageService: NzMessageService
  ) {}

  get disabledOkBtn(): boolean {
    return this.formGroup ? this.formGroup.invalid : true;
  }

  get disabledCancelBtn(): boolean {
    return this.isLoading;
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      solicitationReply: this.solicitationReply.id,
      description: DjForms.ReplyDescription()
    });
  }

  answer() {
    this.isLoading = true;
    this.service.create(this.formGroup.value).subscribe(response => {
      this.isLoading = false;
      this.nzModalRef.destroy();
      this.messageService.success('Réplica respondida com sucesso');
      this.location.back();
    });
  }
}
