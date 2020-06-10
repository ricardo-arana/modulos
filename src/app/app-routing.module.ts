import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComprasComponent } from './pages/lista-compras/lista-compras.component';
import { lcRoutes } from './pages/lista-compras/lista-compras.routing';


const routes: Routes = [
{path: 'usuario',
  loadChildren: () => import('./pages/datos-personales/datos-personales.module').then(m => m.DatosPersonalesModule)
},
{path: 'compras', component: ListaComprasComponent,
  children: lcRoutes
},
  {path: '**', pathMatch: 'full', redirectTo: 'usuario/registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
