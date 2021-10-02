import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingComponent } from './components/auth-routing';
import { SinginComponent } from './components/singin';
import { SingupComponent } from './components/singup';
import { ForgotComponent } from './components/forgot';
import { AuthGuard } from './guards';
import { ResetPasswordComponent } from './components';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth/singin',
        pathMatch: 'full'
      },
      {
        path: 'forgot',
        component: AuthRoutingComponent,
        children: [
          {
            path: '',
            component: ForgotComponent
          }
        ]
      },
      {
        path: 'reset-password',
        component: AuthRoutingComponent,
        children: [
          {
            path: '',
            component: ResetPasswordComponent
          }
        ]
      },
      {
        path: 'singin',
        component: AuthRoutingComponent,
        children: [
          {
            path: '',
            component: SinginComponent
          }
        ]
      },
      {
        path: 'singup',
        component: AuthRoutingComponent,
        children: [
          {
            path: '',
            component: SingupComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
