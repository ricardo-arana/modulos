import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatosPersonalesService } from './datos-personales.service';
import { RouterModule } from '@angular/router';
import { DatosPersonalesComponent } from './datos-personales.component';
import { DatosPersonalesRoutingModule } from './datos-personales.routing';


@NgModule({
  declarations: [RegistroComponent, ConfirmacionComponent, DatosPersonalesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DatosPersonalesRoutingModule
  ],
  exports: [
    RegistroComponent
  ],
  providers: [
    DatosPersonalesService
  ]
})
export class DatosPersonalesModule { }
