import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import {EagerModule } from './eager-module/eager.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routing order matters:
    EagerModule,//includes the eager.routing
    routing, //app.routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
