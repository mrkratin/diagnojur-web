import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AnalystService } from '../../../services';
import { AnalystPending, AnalystStatusEnum, DocumentStatusEnum } from '../../../models';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'dj-verify-analyst',
  templateUrl: './verify-analyst.component.html',
  styleUrls: ['./verify-analyst.component.css']
})
export class VerifyAnalystComponent implements OnInit {
  isLoading = true;
  isConfirming = false;
  analyst: AnalystPending;
  pending = AnalystStatusEnum.PENDING;
  available = AnalystStatusEnum.AVAILABLE;

  constructor(
    private service: AnalystService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: NzMessageService
  ) {}

  get disabledApproveBtn(): boolean {
    let aux = false;
    if (this.analyst) {
      this.analyst.documents.forEach(document => {
        if (document.status !== DocumentStatusEnum.APPROVED) {
          aux = true;
        }
      });
      return aux || this.analyst.status !== AnalystStatusEnum.PENDING;
    } else {
      return true;
    }
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.initAnalyst(id);
  }

  onBack() {
    this.location.back();
  }

  confirmAnalyst() {
    this.isConfirming = true;
    this.service.confirmAnalyst(this.analyst.id).subscribe(
      () => {
        this.isConfirming = false;
        this.analyst.status = this.available;
        this.messageService.success('Analista Diagnojur aprovado com sucesso!');
      },
      () => (this.isConfirming = true)
    );
  }

  private initAnalyst(id: number) {
    this.service.findPendingById(id).subscribe(
      response => {
        this.isLoading = false;
        this.analyst = response.data;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
