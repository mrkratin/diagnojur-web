import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

import {
  AddDiscountCouponComponent,
  AddressComponent,
  AdminRoutingComponent,
  AnalystComponent,
  AnalystPendingComponent,
  BillingComponent,
  ConfirmPaymentComponent,
  DashboardComponent,
  DiscountCouponComponent,
  DocumentCardComponent,
  InfoComponent,
  PhoneComponent,
  ProfileComponent,
  ProfileDataService,
  SearchProfileComponent,
  TransferRequestAvailabilityComponent,
  VerifyAnalystComponent
} from './components';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './guards';
import {
  AnalystService,
  DocumentService,
  PersonService,
  TransferRequestAvailabilityService,
  TelephoneService
} from './services';
import { SharedModule } from '../shared';
import {
  DocumentDeniedTypePipe,
  DocumentStatusPipe,
  DocumentTypePipe,
  ProfileTypePipe,
  TransferRequestAvailabilityStatusPipe
} from './pipes';

@NgModule({
  declarations: [
    AddDiscountCouponComponent,
    AdminRoutingComponent,
    AnalystPendingComponent,
    BillingComponent,
    ConfirmPaymentComponent,
    DashboardComponent,
    DiscountCouponComponent,
    DocumentCardComponent,
    ProfileComponent,
    SearchProfileComponent,
    TransferRequestAvailabilityComponent,
    VerifyAnalystComponent,
    DocumentDeniedTypePipe,
    DocumentStatusPipe,
    DocumentTypePipe,
    ProfileTypePipe,
    TransferRequestAvailabilityStatusPipe,
    AddressComponent,
    AnalystComponent,
    InfoComponent,
    PhoneComponent
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
    AdminGuard,
    AnalystService,
    DocumentService,
    PersonService,
    TransferRequestAvailabilityService,
    DocumentDeniedTypePipe,
    DocumentStatusPipe,
    DocumentTypePipe,
    ProfileDataService,
    ProfileTypePipe,
    TransferRequestAvailabilityStatusPipe,
    TelephoneService
  ],
  entryComponents: [AddDiscountCouponComponent]
})
export class AdminModule {}
