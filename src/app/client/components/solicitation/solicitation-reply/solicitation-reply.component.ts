import { Component, EventEmitter, OnInit } from '@angular/core';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diagnosis, SolicitationReply, SolicitationReplyCreate } from '../../../models';
import { ReplyReason, ReplyReasonEnum, replyReasons } from '../../../../shared/models';
import { SolicitationReplyService } from '../../../services';

@Component({
  selector: 'dj-solicitation-reply',
  templateUrl: './solicitation-reply.component.html',
  styleUrls: ['./solicitation-reply.component.css']
})
export class SolicitationReplyComponent implements OnInit {
  diagnosis: Diagnosis;
  isLoading = false;
  formGroup: FormGroup;
  reasons: ReplyReason[] = replyReasons;
  emitter: EventEmitter<SolicitationReply>;

  constructor(
    public nzModalRef: NzModalRef,
    private formBuilder: FormBuilder,
    private service: SolicitationReplyService,
    private messageService: NzMessageService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      diagnosis: this.diagnosis.id,
      description: ['', [Validators.maxLength(255)]],
      reason: ReplyReasonEnum.LANGUAGE
    });
  }

  solicitationReply() {
    this.isLoading = true;
    const reply: SolicitationReplyCreate = this.formGroup.value;
    this.service.solicitationReply(reply).subscribe(
      response => {
        this.isLoading = false;
        this.emitter.emit(response.data);
        this.messageService.success('Solicitação de Réplica realizada com sucesso');
        this.nzModalRef.close();
      },
      error => {
        this.isLoading = false;
      }
    );
  }
}
