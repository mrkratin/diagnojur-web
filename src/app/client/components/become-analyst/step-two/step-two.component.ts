import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { NzMessageService, UploadChangeParam } from 'ng-zorro-antd';
import { DocumentTypeEnum } from '../../../models';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'dj-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  @Output()
  sendLockNext: EventEmitter<boolean> = new EventEmitter();
  documents: Map<DocumentTypeEnum, string>;
  readonly urlFiles: string = 'files';
  readonly urlUpload: string = environment.urlApi + this.urlFiles;
  readonly dOab: DocumentTypeEnum = DocumentTypeEnum.OAB;
  readonly dOabVerso: DocumentTypeEnum = DocumentTypeEnum.OAB_VERSO;
  readonly dAddress: DocumentTypeEnum = DocumentTypeEnum.ADDRESS;
  readonly dOfficial: DocumentTypeEnum = DocumentTypeEnum.OFFICIAL;
  private readonly maxImageSize: number = 50;
  private readonly numberOfDocuments: number = 2;

  constructor(private messageService: NzMessageService) {}

  get lockNext(): boolean {
    return this.documents.size !== this.numberOfDocuments;
  }

  ngOnInit() {
    if (!this.documents) {
      this.documents = new Map();
    }

    this.sendLockNext.emit(this.lockNext);
  }

  changeFile(param: UploadChangeParam, type: DocumentTypeEnum) {
    if (param.file.response) {
      if (param.type === 'removed') {
        this.documents.delete(type);
      } else {
        this.documents.set(type, param.file.response.data.secretKey);
      }
      this.sendLockNext.emit(this.lockNext);
    }
  }

  beforeUpload = (file: File): boolean | Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      const isImage: boolean = file.type.includes('image');
      if (!isImage) {
        this.messageService.error(
          'Você só pode anexar arquivos de imagem (Jpeg, PNG, SVG, etc'
        );
        observer.complete();
        return;
      }
      const sizeExceeded: boolean = file.size / 1024 / 1024 < this.maxImageSize;
      if (!sizeExceeded) {
        this.messageService.error(
          `A imagem deve ser menor que ${this.maxImageSize}MB`
        );
        observer.complete();
        return;
      }
      observer.next(isImage && sizeExceeded);
      observer.complete();
    });
  };
}
