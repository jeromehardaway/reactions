import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusesComponent } from './statuses/statuses.component';

import { StatusesService } from './statuses/statuses.service';

export const firebaseConfig = {
  apiKey: "AIzaSyA9KjfjnpREroJFLb09P4NKbKSt33L4nGc",
  authDomain: "angular-reactions.firebaseapp.com",
  databaseURL: "https://angular-reactions.firebaseio.com",
  projectId: "angular-reactions",
  storageBucket: "angular-reactions.appspot.com",
  messagingSenderId: "982576077642"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
