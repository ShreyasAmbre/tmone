import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminworksheetPageRoutingModule } from './adminworksheet-routing.module';

import { AdminworksheetPage } from './adminworksheet.page';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminworksheetPageRoutingModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,

  ],
  declarations: [AdminworksheetPage]
})
export class AdminworksheetPageModule {}
