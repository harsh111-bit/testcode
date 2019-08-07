import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UsersGetService} from "./test-app.get.service";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
