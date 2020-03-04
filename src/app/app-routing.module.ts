import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoCrearComponent } from './contacto-crear/contacto-crear.component';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contactos/crear', component: ContactoCrearComponent},
  {path: 'contactos/:contactoId', component: ContactoDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
