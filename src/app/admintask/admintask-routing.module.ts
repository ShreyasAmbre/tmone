import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmintaskPage } from './admintask.page';

const routes: Routes = [
  {
    path: '',
    component: AdmintaskPage
  },
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  // },
  {
    path: 'detailtask',
    loadChildren: () => import('./detailtask/detailtask.module').then( m => m.DetailtaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmintaskPageRoutingModule {}
