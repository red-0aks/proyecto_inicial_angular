import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private listaCarrito: Juego [] = [];
  private montoTotal: number = 0;

  constructor() { }

  public addToCarrito(juego: Juego): void{
    this.listaCarrito.push(juego);
    this.montoTotal = this.montoTotal + juego.precio;
  }

  public getCarrito(): Juego[] {
    return this.listaCarrito;
  }

  public sizeCarrito(): number {
    return this.listaCarrito.length;
  }

  public deleteAllCarrito(): void {
    this.listaCarrito.splice(0,this.listaCarrito.length);
    this.montoTotal = 0;
  }

  public deleteByIndex(index: number): void {
    this.montoTotal = this.montoTotal - this.listaCarrito[index].precio;
    this.listaCarrito.splice(index,1);
  }

  public getMontoTotal(): number {
    return this.montoTotal;
  }

}
