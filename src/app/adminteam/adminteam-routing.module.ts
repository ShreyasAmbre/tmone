import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminteamPage } from './adminteam.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminteamPage
  // },
  {
    path: 'adminteam',
    component: AdminteamPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'adminteam/tab1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminteamPageRoutingModule {}
