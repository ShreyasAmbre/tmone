import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NavmenuModule} from './component/navmenu/navmenu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage-angular';
import {AngularFireDatabaseModule} from '@angular/fire/database';


var firebaseConfig = {
  apiKey: "AIzaSyAeQoXPjeMwehgDnf3UgjkDNEDGQjyx8lE",
  authDomain: "tm-project-b00a2.firebaseapp.com",
  projectId: "tm-project-b00a2",
  databaseURL: "https://tm-project-b00a2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "tm-project-b00a2.appspot.com",
  messagingSenderId: "555308825803",
  appId: "1:555308825803:web:b5c4e51ab474e17a5a2f4e"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireDatabaseModule, IonicStorageModule.forRoot(), NavmenuModule, AngularFireAuthModule, AngularFireModule.initializeApp(firebaseConfig),
            BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
