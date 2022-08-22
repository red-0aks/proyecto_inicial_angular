import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/services/juego';
import { JuegoService } from 'src/app/services/juego.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  @Input() juegos: Juego[] = [];
  @Input() mensaje: string = '';
  public page: number = 0;
  optionSort: { property : string | null, order : string } = {property : null, order : 'asc'}
  titulo: string = 'Listado juegos';
  constructor(private juegoService: JuegoService) { }
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
  ordenarListaJuegos(property : string) : void{
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

  public eliminar(juego: Juego) : void {
    swal({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar al empleado ${juego.nombre} ${juego.precio}?`,
      type: 'warning',
      showCancelButton : true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar!!!',
      confirmButtonClass: 'btn btn-success ms-2',
      cancelButtonClass: 'btn btn-danger ms-2',
      buttonsStyling: false,
      reverseButtons: true
    }).
    then((result) => {
      if(result.value) {
        this.juegoService.deleteJuego(juego.id).subscribe(
          response => {
            this.juegos = this.juegos.filter(jue => jue != juego)
            swal('Juego eliminado', `El juego ${juego.nombre} ha sido eliminado con éxito!`, 'success')
          }
        )
      }
    })
  }
  
}

