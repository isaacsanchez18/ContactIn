import { Injectable } from '@angular/core';
import { Contacto } from 'src/models/contacto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [
    {
      id: '1234',
      nombre: 'Felipe Ferras Gomez',
      tel: '664-123-4567',
      correo: 'hola@gmail.com'
    },
    {
      id: '1235',
      nombre: 'Justin Jb Sierreno',
      tel: '664-234-5678',
      correo: 'adios@gmail.com'
    }
  ];



  constructor() { }

  obtContactos(): Promise<Contacto[]> {
    return new Promise ((resolve, reject) => {
      resolve(this.contactos as Contacto[]);
    });
  }

  obtContacto(contactoId: string): Promise<Contacto> {

    return new Promise((resolve, reject) => {
      const encontrarContacto = this.contactos.find((contacto) => {
        return contacto.id === contactoId;
      });

      if(encontrarContacto) {
        resolve(encontrarContacto);
      } else {
        reject(null);
      }
    });
  }

  borrarContacto(contactoId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const contactosRestantes = this.contactos.filter((contacto) => {
        return contacto.id !== contactoId;
      });

      if (JSON.stringify(contactosRestantes) !== JSON.stringify(this.contactos)) {
        this.contactos = contactosRestantes;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  actContacto(contactoId: string, actcontacto): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const contactosActualizados = this.contactos.map((contacto) => {
        if (contacto.id === contactoId) {
          const nuevoContacto = {
            ...contacto,
            ...actcontacto
          };
          return nuevoContacto;
        }
        return contacto;
      });

      if (JSON.stringify(contactosActualizados) !== JSON.stringify(this.contactos)) {
        this.contactos = contactosActualizados;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  agregarContacto(contacto: Contacto): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.contactos.push(contacto);
      resolve(true);
    });
  }
}
