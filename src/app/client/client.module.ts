import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AddSolicitationComponent,
  BecomeAnalystComponent,
  ClientRoutingComponent,
  DiagnosisTypesComponent,
  EvaluateDiagnosisComponent,
  ListSolicitationsComponent,
  PaymentHistoryComponent,
  ProfileDataService,
  SolicitationComponent,
  SolicitationDiagnosisComponent,
  SolicitationInfoComponent,
  SolicitationReplyComponent,
  SolicitationTimelineComponent,
  SolicitationTypesComponent,
  StepFourthComponent,
  StepOneComponent,
  StepThreeComponent,
  StepTwoComponent,
  TagSolicitationStatusComponent,
  ProfileComponent,
  InfoComponent,
  AnalystComponent,
  PhoneComponent,
  AddressComponent,
  DocumentCardComponent,
  PendingComponent
} from './components';
import {
  AnalystService,
  EvaluateService,
  PaymentService,
  SolicitationReplyService,
  SolicitationService,
  TelephoneService
} from './services';
import {
  PaymentStatusPipe,
  PaymentTypePipe,
  SolicitationStatusPipe,
  SolicitationTimelinePipe
} from './pipes';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';
import { BecomeAnalystGuard, ClientGuard } from './guards';

@NgModule({
  declarations: [
    ClientRoutingComponent,
    AddSolicitationComponent,
    BecomeAnalystComponent,
    EvaluateDiagnosisComponent,
    ListSolicitationsComponent,
    SolicitationComponent,
    DiagnosisTypesComponent,
    SolicitationStatusPipe,
    SolicitationTimelinePipe,
    SolicitationDiagnosisComponent,
    SolicitationInfoComponent,
    SolicitationReplyComponent,
    SolicitationTimelineComponent,
    SolicitationTypesComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourthComponent,
    TagSolicitationStatusComponent,
    PaymentHistoryComponent,
    PaymentStatusPipe,
    PaymentTypePipe,
    ProfileComponent,
    InfoComponent,
    AnalystComponent,
    PhoneComponent,
    AddressComponent,
    DocumentCardComponent,
    PendingComponent
  ],
  entryComponents: [
    EvaluateDiagnosisComponent,
    DiagnosisTypesComponent,
    SolicitationReplyComponent,
    SolicitationTimelineComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxMaskModule.forChild(),

    SharedModule.forRoot()
  ],
  providers: [
    AnalystService,
    EvaluateService,
    PaymentService,
    SolicitationService,
    SolicitationReplyService,
    BecomeAnalystGuard,
    ClientGuard,
    SolicitationStatusPipe,
    ProfileDataService,
    TelephoneService
  ]
})
export class ClientModule {}
