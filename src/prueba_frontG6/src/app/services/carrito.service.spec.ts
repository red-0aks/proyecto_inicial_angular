import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.service';
import { Juego } from './juego';

describe('CarritoService', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoService);
  });

  it('Creación del Servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Agregar juegos',()=>{
    service.addToCarrito(new Juego());
    expect(service.sizeCarrito()).toEqual(1);
  });

  it('Obtener juegos',()=>{
    service.addToCarrito(new Juego());
    service.addToCarrito(new Juego());
    service.addToCarrito(new Juego());
    expect(service.getCarrito().length).toEqual(3);
  });

  it('Borrar Carrito',()=>{
    service.addToCarrito(new Juego());
    service.addToCarrito(new Juego());
    service.deleteAllCarrito()
    expect(service.sizeCarrito()).toEqual(0);
  });

  it('Obtener Monto Total',()=>{
    expect(service.getMontoTotal()).toEqual(0);
  });

  it('Borrar por Index',()=>{
    let juego1 = new Juego();
    let juego2 = new Juego();
    juego1.id = 9999;
    juego1.precio = 100;
    juego2.id = 123;
    juego2.precio = 1000;
    service.addToCarrito(juego1);
    service.addToCarrito(juego2);
    service.deleteByIndex(1);
    expect(service.getCarrito()[0].precio).toEqual(100);
  });

});
