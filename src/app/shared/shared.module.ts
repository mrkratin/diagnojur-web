import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AdminMenuComponent,
  AnalystMenuComponent,
  AuthMenuComponent,
  ClientMenuComponent,
  EmptyComponent,
  MainNavComponent,
  SelectBankModalComponent,
  SelectCityModalComponent
} from './components';
import {
  AddressService,
  BankService,
  CityService,
  DiscountCouponService,
  FileService,
  MessageService,
  PersonService,
  ProvinceService,
  TokenService
} from './services';
import {
  CityPipe,
  DateMomentPipe,
  DiscountCouponTypePipe,
  JusticeTypePipe,
  OabPipe,
  PartPoloPipe,
  PartTypePipe,
  ProcessDegreePipe,
  ProcessOrganPipe,
  ProcessResourceTypePipe,
  ProcessTypePipe,
  SolicitationReplyReasonPipe,
  SolicitationSpecificTypePipe,
  SolicitationTypePipe,
  YesNoPipe
} from './pipes';

const services: Provider[] = [
  AddressService,
  BankService,
  CityService,
  DiscountCouponService,
  FileService,
  ProvinceService,
  MessageService,
  PersonService,
  TokenService
];

const components: Array<Type<any>> = [
  AdminMenuComponent,
  AnalystMenuComponent,
  AuthMenuComponent,
  ClientMenuComponent,
  EmptyComponent,
  MainNavComponent,
  SelectBankModalComponent,
  SelectCityModalComponent
];

const pipes: Array<Type<any>> = [
  CityPipe,
  DateMomentPipe,
  DiscountCouponTypePipe,
  JusticeTypePipe,
  OabPipe,
  PartTypePipe,
  PartPoloPipe,
  ProcessDegreePipe,
  ProcessOrganPipe,
  ProcessResourceTypePipe,
  ProcessTypePipe,
  SolicitationReplyReasonPipe,
  SolicitationTypePipe,
  SolicitationSpecificTypePipe,
  YesNoPipe
];

@NgModule({
  declarations: [components, pipes, SelectCityModalComponent, CityPipe],
  entryComponents: [SelectBankModalComponent, SelectCityModalComponent],
  exports: [components, pipes],
  imports: [CommonModule, NgZorroAntdModule, RouterModule, ReactiveFormsModule],
  providers: services
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: services
    };
  }
}

export type OrderBy = 'creationDate' | 'updateDate' | 'id' | string;
