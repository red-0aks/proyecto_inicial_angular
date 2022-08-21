import { Component, Input, OnInit } from '@angular/core';
import { Empleados } from 'src/app/services/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { faPencil, faTrashCan, faTriangleExclamation, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  @Input() empleados: Empleados[] = []
  @Input() mensaje: string = '';
  titulo : string = 'Listado Empleados';
  faPenSquare = faPencil;
  faTrash = faTrashCan;
  faExclamation = faTriangleExclamation;
  faAddPerson = faUserPlus;

  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      (data) => {
        this.empleados = data.empleados;
        this.mensaje = data.mensaje;
        console.log(this.empleados);
        console.log(this.mensaje);
      }
    );
  }

  ordenarListadoEmpleados (property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

  public eliminarEmpleado(empleado: Empleados): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Seguro que deseas eliminar al empleado ${empleado.nombre} ${empleado.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Me arrepiento!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.deleteEmpleado(empleado.id).subscribe(
          response => {
            this.empleados = this.empleados.filter(emp => emp != empleado)
            swalWithBootstrapButtons.fire('Eliminado!','Has eliminado al empleado indicado','success')
          }
        )
      }
    })
  }

}
