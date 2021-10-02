import { Component, Input, OnInit } from '@angular/core';
import { Document, DocumentDeniedTypeEnum, DocumentStatusEnum } from '../../../models';
import { DocumentService } from '../../../services';

@Component({
  selector: 'dj-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {
  @Input()
  document: Document;
  isLoading = false;
  deniedIsLoading = false;
  readonly unreadable = DocumentDeniedTypeEnum.UNREADABLE;
  readonly incorrect = DocumentDeniedTypeEnum.INCORRECT;
  readonly falsification = DocumentDeniedTypeEnum.FALSIFICATION;

  constructor(private service: DocumentService) {}

  get disableBtn(): boolean {
    return this.document.status !== DocumentStatusEnum.PENDING;
  }

  ngOnInit() {}

  approve() {
    this.isLoading = true;
    this.service.approver(this.document.id).subscribe(
      () => {
        this.document.status = DocumentStatusEnum.APPROVED;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  disapprove(deniedType: DocumentDeniedTypeEnum) {
    this.deniedIsLoading = true;
    this.service.disapprover(this.document.id, deniedType).subscribe(
      () => {
        this.document.status = DocumentStatusEnum.DISAPPROVED;
        this.deniedIsLoading = false;
      },
      () => {
        this.deniedIsLoading = false;
      }
    );
  }
}
