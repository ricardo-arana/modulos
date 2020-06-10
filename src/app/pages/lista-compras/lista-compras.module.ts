import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPrincipalComponent } from './components/lista-principal/lista-principal.component';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaComprasRouting } from './lista-compras.routing';


@NgModule({
  declarations: [ListaPrincipalComponent, ListaComprasComponent],
  imports: [
    CommonModule,
    ListaComprasRouting
  ]
})
export class ListaComprasModule { }
