import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatosPersonalesService } from './datos-personales.service';



@NgModule({
  declarations: [RegistroComponent, ConfirmacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RegistroComponent
  ],
  providers: [
    DatosPersonalesService
  ]
})
export class DatosPersonalesModule { }
