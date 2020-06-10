import { Routes, RouterModule } from '@angular/router';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaPrincipalComponent } from './components/lista-principal/lista-principal.component';
import { NgModule } from '@angular/core';


const lcRoutes: Routes = [
{path: '', component: ListaComprasComponent,
      children: [
       {path: 'lista', component: ListaPrincipalComponent}
      ]}
   
];

@NgModule({
    imports: [ RouterModule.forChild(lcRoutes)],
    exports: [RouterModule]
})
export class ListaComprasRouting {}
