import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';

export const firebaseConfig ={
    apiKey: "AIzaSyBDRSNa5VNn-R4GTPHayck9r-J6TN661dA",
    authDomain: "inspiro-7595.firebaseapp.com",
    databaseURL: "https://inspiro-7595.firebaseio.com",
    projectId: "inspiro-7595",
    storageBucket: "inspiro-7595.appspot.com",
    messagingSenderId: "633685403834"
};

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
