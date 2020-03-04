import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDetalleComponent } from './contacto-detalle.component';

describe('ContactoDetalleComponent', () => {
  let component: ContactoDetalleComponent;
  let fixture: ComponentFixture<ContactoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
