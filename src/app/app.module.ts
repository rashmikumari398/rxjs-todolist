import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducer} from './user.reducer'
import {  StoreModule } from "@ngrx/store";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({result:reducer}),
    StoreDevtoolsModule.instrument({logOnly: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
