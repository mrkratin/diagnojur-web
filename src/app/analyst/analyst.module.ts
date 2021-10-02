import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared';
import {
  AnalystRoutingComponent,
  BillingComponent,
  CurrentDiagnosisComponent,
  DiagnosisPendingComponent,
  DiagnosticAnswerComponent,
  DiagnosticAnswerConfirmComponent,
  DiagnosticComponent,
  DiagnosticDisplayComponent,
  DiagnosticImportantInfoComponent,
  DiagnosticInfoComponent,
  DiagnosticNextComponent,
  ListDiagnosisComponent,
  ListPenalizationComponent,
  SolicitationRepliesPendingComponent,
  SolicitationReplyAnswerComponent,
  ListTransfersComponent,
  ListRequestWithdrawComponent
} from './components';
import { DiagnosisStatusPipe, TransferRequestStatusPipe } from './pipes';
import {
  AboutProcessService,
  BankAccountService,
  BillingService,
  DiagnosisService,
  DiagnosticAvailabilityService,
  PartService,
  ProcessEventService,
  ReplyService,
  SolicitationReplyService,
  TransferRequestService
} from './services';
import { AnalystGuard } from './guards';

@NgModule({
  declarations: [
    AnalystRoutingComponent,
    BillingComponent,
    CurrentDiagnosisComponent,
    DiagnosisPendingComponent,
    DiagnosticComponent,
    ListDiagnosisComponent,
    ListPenalizationComponent,
    DiagnosisStatusPipe,
    DiagnosticInfoComponent,
    DiagnosticImportantInfoComponent,
    DiagnosticAnswerComponent,
    DiagnosticAnswerConfirmComponent,
    DiagnosticDisplayComponent,
    SolicitationReplyAnswerComponent,
    SolicitationRepliesPendingComponent,
    DiagnosticNextComponent,
    TransferRequestStatusPipe,
    ListTransfersComponent,
    ListRequestWithdrawComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forChild(),

    SharedModule.forRoot()
  ],
  providers: [
    AnalystGuard,
    AboutProcessService,
    BankAccountService,
    BillingService,
    DiagnosisService,
    DiagnosticAvailabilityService,
    PartService,
    ProcessEventService,
    ReplyService,
    SolicitationReplyService,
    TransferRequestService,
    TransferRequestStatusPipe
  ],
  entryComponents: [
    DiagnosticAnswerConfirmComponent,
    DiagnosticImportantInfoComponent,
    SolicitationReplyAnswerComponent
  ]
})
export class AnalystModule {}
