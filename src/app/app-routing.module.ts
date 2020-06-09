import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/datos-personales/components/registro/registro.component';
import { ConfirmacionComponent } from './pages/datos-personales/components/confirmacion/confirmacion.component';
import { ListaPrincipalComponent } from './pages/lista-compras/components/lista-principal/lista-principal.component';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';


const routes: Routes = [
  {path: 'usuario', component: DatosPersonalesComponent,
  children: [
    {path: 'registro', component: RegistroComponent},
    {path: 'confirmacion', component: ConfirmacionComponent},
  ]},
  {path: 'lista', component: ListaPrincipalComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'usuario/registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
