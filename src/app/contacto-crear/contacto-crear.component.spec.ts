import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCrearComponent } from './contacto-crear.component';

describe('ContactoCrearComponent', () => {
  let component: ContactoCrearComponent;
  let fixture: ComponentFixture<ContactoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
