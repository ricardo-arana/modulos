import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ListaComponent } from './components/lista/lista.component';
import { VentasRoutingModule } from './ventas.routing';



@NgModule({
  declarations: [VentasComponent, ListaComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
