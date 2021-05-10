import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmimrequestPageRoutingModule } from './admimrequest-routing.module';

import { AdmimrequestPage } from './admimrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmimrequestPageRoutingModule
  ],
  declarations: [AdmimrequestPage]
})
export class AdmimrequestPageModule {}
