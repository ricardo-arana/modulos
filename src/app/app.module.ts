import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaService } from './prueba.service';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatosPersonalesModule } from './pages/datos-personales/datos-personales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DatosPersonalesModule
  ],
  providers: [
    PruebaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
