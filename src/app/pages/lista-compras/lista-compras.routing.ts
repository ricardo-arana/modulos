import { Routes, RouterModule } from '@angular/router';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaPrincipalComponent } from './components/lista-principal/lista-principal.component';
import { NgModule } from '@angular/core';


export const lcRoutes: Routes = [
    
      {path: 'lista', component: ListaPrincipalComponent}
   
];

// @NgModule({
//     imports: [ RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class ListaComprasRouting {}
