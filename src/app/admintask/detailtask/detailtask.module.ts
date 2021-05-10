import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtaskPageRoutingModule } from './detailtask-routing.module';

import { DetailtaskPage } from './detailtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtaskPageRoutingModule
  ],
  declarations: [DetailtaskPage]
})
export class DetailtaskPageModule {}
