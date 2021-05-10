import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminworksheetPage } from './adminworksheet.page';

const routes: Routes = [
  {
    path: '',
    component: AdminworksheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminworksheetPageRoutingModule {}
