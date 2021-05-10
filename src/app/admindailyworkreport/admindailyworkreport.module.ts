import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmindailyworkreportPageRoutingModule } from './admindailyworkreport-routing.module';

import { AdmindailyworkreportPage } from './admindailyworkreport.page';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmindailyworkreportPageRoutingModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
  ],
  declarations: [AdmindailyworkreportPage]
})
export class AdmindailyworkreportPageModule {}
