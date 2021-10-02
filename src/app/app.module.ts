import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {
  NgZorroAntdModule,
  NZ_I18N,
  NZ_MESSAGE_CONFIG,
  pt_BR
} from 'ng-zorro-antd';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import * as moment from 'moment';
import pt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AuthModule, AuthRoutingModule } from './auth';
import { DjHttpInterceptor } from './interceptors';
import { ClientModule, ClientRoutingModule } from './client';
import { AnalystModule, AnalystRoutingModule } from './analyst';
import { AdminModule, AdminRoutingModule } from './admin';
import { ClarityModule } from '@clr/angular';

registerLocaleData(pt);
moment.locale('pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    NgxMaskModule.forRoot(),

    SharedModule.forRoot(),
    AuthModule,
    AuthRoutingModule,
    ClientModule,
    ClientRoutingModule,
    AnalystModule,
    AnalystRoutingModule,
    AdminModule,
    AdminRoutingModule,

    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: HTTP_INTERCEPTORS, useClass: DjHttpInterceptor, multi: true },
    {
      provide: NZ_MESSAGE_CONFIG,
      useValue: {
        nzDuration: 3000,
        nzMaxStack: 1,
        nzPauseOnHover: true,
        nzAnimate: true
      }
    },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
