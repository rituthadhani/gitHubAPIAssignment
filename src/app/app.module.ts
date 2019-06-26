import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserListingComponent} from './user-listing/user-listing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"",
        component:UserListingComponent,
        pathMatch:"full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
