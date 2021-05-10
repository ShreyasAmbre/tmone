import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminteamPageRoutingModule } from './adminteam-routing.module';

import { AdminteamPage } from './adminteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminteamPageRoutingModule
  ],
  declarations: [AdminteamPage]
})
export class AdminteamPageModule {}
