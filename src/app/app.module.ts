import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppEsModulesComponent} from "./app-esmodules.component";

@NgModule({
  declarations: [
    AppEsModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppEsModulesComponent]
})
export class AppModule { }
