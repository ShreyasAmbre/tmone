import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmindailyworkreportPage } from './admindailyworkreport.page';

const routes: Routes = [
  {
    path: '',
    component: AdmindailyworkreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindailyworkreportPageRoutingModule {}
