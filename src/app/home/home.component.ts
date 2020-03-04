import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/models/contacto.model';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  contactos: Contacto[] = [];
  constructor(private contactoServicio: ContactoService) { }

  ngOnInit() {
    this.obtContactos();
  }

  obtContactos() {
    this.contactoServicio.obtContactos().then((contactos) => {
      this.contactos = contactos;
    });
  }
}
