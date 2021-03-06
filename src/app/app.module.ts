import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactoCrearComponent } from './contacto-crear/contacto-crear.component';
import { HomeComponent } from './home/home.component';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoCrearComponent,
    HomeComponent,
    ContactoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
