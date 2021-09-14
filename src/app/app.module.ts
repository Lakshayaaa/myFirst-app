import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
