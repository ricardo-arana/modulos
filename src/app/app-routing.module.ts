import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { dpRoutes } from './pages/datos-personales/datos-personales.routing';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';
import { ListaComprasComponent } from './pages/lista-compras/lista-compras.component';
import { lcRoutes } from './pages/lista-compras/lista-compras.routing';


const routes: Routes = [
  {path: 'usuario', component: DatosPersonalesComponent,
  children: dpRoutes
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
