import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  AnalystRoutingComponent,
  BillingComponent,
  CurrentDiagnosisComponent,
  DiagnosticComponent,
  ListDiagnosisComponent
} from './components';
import { AnalystGuard } from './guards';

const routes: Routes = [
  {
    path: 'analyst/list-diagnosis',
    canActivate: [AnalystGuard],
    canActivateChild: [AnalystGuard],
    component: AnalystRoutingComponent,
    children: [
      {
        path: '',
        component: ListDiagnosisComponent
      }
    ]
  },
  {
    path: 'analyst/diagnostic',
    component: AnalystRoutingComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: CurrentDiagnosisComponent
      }
    ]
  },
  {
    path: 'analyst/diagnostic/:id',
    component: AnalystRoutingComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: DiagnosticComponent
      }
    ]
  },
  {
    path: 'analyst/billing',
    component: AnalystRoutingComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: BillingComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRoutingModule {}
