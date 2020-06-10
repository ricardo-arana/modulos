import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'usuario',
  loadChildren: () => import('./pages/datos-personales/datos-personales.module').then(m => m.DatosPersonalesModule)
},
{path: 'compras',
  loadChildren: () => import('./pages/lista-compras/lista-compras.module').then(m => m.ListaComprasModule)
},
  {path: '**', pathMatch: 'full', redirectTo: 'usuario/registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
