import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/models/contacto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto-detalle',
  templateUrl: './contacto-detalle.component.html',
  styleUrls: ['./contacto-detalle.component.sass']
})
export class ContactoDetalleComponent implements OnInit {

  show = false;

  contactos: Contacto[];
  contacto: Contacto;
  contactoForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private contactoService: ContactoService,
              private router: Router) { }

  ngOnInit() {
    const contactoId = this.activatedRoute.snapshot.paramMap.get('contactoId');
    this.obtContacto(contactoId);
    this.initForm();
    this.obtContactos();
  }

  initForm() {
    this.contactoForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required])
    });
  }

  patchForm() {
    this.contactoForm.patchValue({
      ...this.contacto
    });
  }

  obtContacto(contactoId: string) {
    this.contactoService.obtContacto(contactoId).then((contacto: Contacto) => {
      this.contacto = contacto;
      console.log(contacto);
      this.patchForm();
    }).catch((error) => {
      this.router.navigate(['contactos', 'contacto.id']);
    });
  }

  obtContactos() {
    this.contactoService.obtContactos().then((contactos: Contacto[]) => {
      this.contactos = contactos;
    });
  }

  borrarContacto(contactoId: string) {
    this.contactoService.borrarContacto(contactoId).then((result) => {
      this.obtContactos();
      this.router.navigate(['']);
    }).catch((error) => {
      console.log(error);
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      const contactoActualizado: Contacto = {
        id: this.contacto.id,
        ...this.contactoForm.value
      };

      this.contactoService.actContacto(this.contacto.id, contactoActualizado).then((res) => {
        this.router.navigate(['']);
      }).catch((error) => {
        alert('Ocurrio un error al actualizar el libro.');
      });
    } else {
      alert('Completa todos los campos');
    }
  }

  validar() {
    this.show = true;
  }
}
