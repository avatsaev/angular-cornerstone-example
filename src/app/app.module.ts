import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CornerstoneService} from "./services/cornerstone.service";
import {CornerstoneDirective} from "./directives/cornerstone.directive";

@NgModule({
  declarations: [
    AppComponent,
    CornerstoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CornerstoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
