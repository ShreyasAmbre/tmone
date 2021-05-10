import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmintaskPageRoutingModule } from './admintask-routing.module';

import { AdmintaskPage } from './admintask.page';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmintaskPageRoutingModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
  ],
  declarations: [AdmintaskPage]
})
export class AdmintaskPageModule {}
