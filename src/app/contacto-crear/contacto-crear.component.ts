import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';
import { Router } from '@angular/router';
import { Contacto } from 'src/models/contacto.model';

@Component({
  selector: 'app-contacto-crear',
  templateUrl: './contacto-crear.component.html',
  styleUrls: ['./contacto-crear.component.sass']
})
export class ContactoCrearComponent implements OnInit {

  contactoForm: FormGroup;
  constructor(private contactoService: ContactoService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactoForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      nombre: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      const nuevoContacto: Contacto = {
        ...this.contactoForm.value
      };

      this.contactoService.agregarContacto(nuevoContacto).then((result) => {
        this.router.navigate(['']);
      }).catch((error) => {
        console.log(error);
      });
      console.log(nuevoContacto);
      //if (nuevoContacto.id === this.contactoService.contactos.find(contacto.id));
    } else {
      alert('Completa todos los campos');
    }

  }

}
