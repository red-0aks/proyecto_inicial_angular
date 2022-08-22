import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/services/juego';
import { JuegoService } from 'src/app/services/juego.service';
import swal from 'sweetalert2';
import { CarritoService } from 'src/app/services/carrito.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() juegos: Juego[] = [];
  @Input() mensaje: string = '';
  public page: number = 0;
  optionSort: { property : string | null, order : string } = {property : null, order : 'asc'}
  titulo: string = 'Listado juegos';
  constructor(private carritoService: CarritoService,private juegoService: JuegoService) { }
  ngOnInit(): void {
    this.cargarJuegos();
  }
  
  cargarJuegos(): void {
    this.juegoService.getJuegos().subscribe(
      (data) => {
        this.juegos = data.juegos;
        this.mensaje = data.mensaje;
        console.log(this.juegos);
        console.log(this.mensaje);
      }
    );
  }


  public addToCarrito(juego: Juego): void {
    this.carritoService.addToCarrito(juego);
    (swal as any).fire({
      position: 'top-end',
      title: 'juego Agregado',
      showConfirmButton: false,
      timer: 300
    })
  }


}
  