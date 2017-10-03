import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import {EagerModule } from './eager-module/eager.module';
import { SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule.forRoot(), //We should only call forRoot in the root app module and no where else - https://angular-2-training-book.rangle.io/handout/modules/shared-di-tree.html
    //routing order matters:
    EagerModule,//includes the eager.routing
    routing, //app.routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
