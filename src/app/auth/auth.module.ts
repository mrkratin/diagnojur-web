import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

import {
  AuthRoutingComponent,
  ForgotComponent,
  ResetPasswordComponent,
  SinginComponent,
  SingupComponent
} from './components';
import { SharedModule } from '../shared';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [AuthRoutingComponent, ForgotComponent, SinginComponent, SingupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    NgxMaskModule.forChild(),

    SharedModule.forRoot()
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
