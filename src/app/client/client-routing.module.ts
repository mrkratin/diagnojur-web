import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientRoutingComponent } from './components/client-routing';
import { ListSolicitationsComponent } from './components/list-solicitations';
import { AddSolicitationComponent } from './components/add-solicitation';
import { SolicitationComponent } from './components/solicitation';
import { BecomeAnalystComponent } from './components/become-analyst';
import { SolicitationTypesComponent } from './components/solicitation-types';
import { BecomeAnalystGuard, ClientGuard } from './guards';
import { PaymentHistoryComponent } from './components/payment-history';
import {
  AddressComponent,
  AnalystComponent,
  InfoComponent,
  PhoneComponent,
  ProfileComponent
} from './components/profile';

const routes: Routes = [
  {
    path: 'client',
    canActivate: [ClientGuard],
    canActivateChild: [ClientGuard],
    children: [
      {
        path: '',
        redirectTo: 'list-solicitations',
        pathMatch: 'full'
      },
      {
        path: 'list-solicitations',
        component: ClientRoutingComponent,
        children: [
          {
            path: '',
            component: ListSolicitationsComponent
          }
        ]
      },
      {
        path: 'add-solicitation',
        component: ClientRoutingComponent,
        children: [
          {
            path: '',
            component: AddSolicitationComponent
          }
        ]
      },
      {
        path: 'solicitation/:id',
        component: ClientRoutingComponent,
        pathMatch: 'full',
        children: [
          {
            path: '',
            component: SolicitationComponent
          }
        ]
      },
      // {
      //   path: 'help',
      //   component: ClientRoutingComponent,
      //   children: [
      //     {
      //       path: '',
      //       component: HelpComponent
      //     }
      //   ]
      // },
      {
        path: 'become-analyst',
        component: ClientRoutingComponent,
        canActivate: [BecomeAnalystGuard],
        canActivateChild: [BecomeAnalystGuard],
        children: [
          {
            path: '',
            component: BecomeAnalystComponent
          }
        ]
      },
      {
        path: 'solicitation-types',
        component: ClientRoutingComponent,
        children: [
          {
            path: '',
            component: SolicitationTypesComponent
          }
        ]
      },
      {
        path: 'payment-history',
        component: ClientRoutingComponent,
        children: [
          {
            path: '',
            component: PaymentHistoryComponent
          }
        ]
      },
      {
        path: 'profile',
        component: ClientRoutingComponent,
        children: [
          {
            path: '',
            component: ProfileComponent,
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
              },
              {
                path: 'address',
                component: AddressComponent
              },
              {
                path: 'analyst',
                component: AnalystComponent
              },
              {
                path: 'info',
                component: InfoComponent
              },
              {
                path: 'phone',
                component: PhoneComponent
              }
            ]
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
export class ClientRoutingModule {}
