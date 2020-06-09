import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPrincipalComponent } from './pages/lista-compras/components/lista-principal/lista-principal.component';

import { ListaComprasComponent } from './pages/lista-compras/lista-compras.component';


const routes: Routes = [
  {path: 'compras', component: ListaComprasComponent,
children: [
  {path: 'lista', component: ListaPrincipalComponent}
]},
  {path: '**', pathMatch: 'full', redirectTo: 'usuario/registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
