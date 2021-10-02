import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/singin',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    redirectTo: '/auth/singin',
    pathMatch: 'full'
  },
  {
    path: 'client',
    redirectTo: '/client/list-solicitations',
    pathMatch: 'full'
  },
  {
    path: 'analyst',
    redirectTo: '/analyst/list-diagnosis',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: '/admin/billing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
