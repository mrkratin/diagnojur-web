import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  AddressComponent,
  AdminRoutingComponent,
  AnalystComponent,
  AnalystPendingComponent,
  BillingComponent,
  ConfirmPaymentComponent,
  DashboardComponent,
  DiscountCouponComponent,
  InfoComponent,
  PhoneComponent,
  ProfileComponent,
  SearchProfileComponent,
  TransferRequestAvailabilityComponent,
  VerifyAnalystComponent
} from './components';
import { AdminGuard } from './guards';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    component: AdminRoutingComponent,
    children: [
      {
        path: 'billing',
        component: BillingComponent
      },
      {
        path: 'confirm-payment',
        component: ConfirmPaymentComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'discount-coupons',
        component: DiscountCouponComponent
      },
      {
        path: 'search',
        component: SearchProfileComponent
      },
      {
        path: 'analyst-pending',
        component: AnalystPendingComponent
      },
      {
        path: 'verify-analyst/:id',
        component: VerifyAnalystComponent
      },
      {
        path: 'transfer-request',
        component: TransferRequestAvailabilityComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: InfoComponent
          },
          {
            path: 'analyst',
            component: AnalystComponent
          },
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'phone',
            component: PhoneComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminRoutingModule {}
