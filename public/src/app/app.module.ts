import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';

import {FormsModule} from "@angular/forms";
import { BakedbyComponent } from './bakedby/bakedby.component';


@NgModule({
  declarations: [
    AppComponent,
    BakedbyComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
