import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';

// components
import { BeartextComponent } from './beartext/beartext.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { MenuComponent } from './menu/menu/menu.component'


import { firebaseConfig } from '../secret';
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    BeartextComponent,
    LoginComponent,
    LoadingComponent,
    LoginComponent,
    MainMenuComponent,
    MenuComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
