import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleados } from 'src/app/services/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titleCreate : string = "Formulario Registro Nuevos Empleados";
  titleUpdate :string = "Formulario Actualización Empleado";
  empleado : Empleados = new Empleados();
  submitted : boolean = false;

  private emailPattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  form: FormGroup = new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    email : new FormControl(''),
    genero : new FormControl(''),
    cargo : new FormControl(''),
    sueldo : new FormControl(''),
    fechaContrato : new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadosService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmpleado();
    this.form = this.formBuilder.group(
      {
        nombre : [
          '', 
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        apellido : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        email : [
          '', 
          [
            Validators.required,
            Validators.maxLength(255),
            Validators.pattern(this.emailPattern)
          ]
        ],
        genero : [
          '', 
          [
            Validators.required,
          ]
        ],
        cargo : [
          '', 
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)
          ]
        ],
        sueldo : [
          0, 
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        fechaContrato : [
          '', 
          [
            Validators.required,
          ]
        ],      
      }
    );
  }

  get f(): {[key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    console.log(this.empleado);
    this.createEmpleado();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public createEmpleado(): void {
    this.empleadoService.createEmpleado(this.empleado).subscribe(
      empleado => {
        this.router.navigate(['/empleados']);
        Swal.fire('Empleado nuevo',`El empleado ${empleado.nombre} ${empleado.apellido} ha sido registrado satisfactoriamente`,'success');
      }
    );
  }

  public getEmpleado(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.empleadoService.getEmpleado(id).subscribe(
          (empleado) => this.empleado = empleado
        )
      }
    });
  }

  public updateEmpleado(): void {
    this.empleadoService.updateEmpleado(this.empleado).subscribe(
      empleado => {
        this.router.navigate(['/empleados']);
        Swal.fire('Empleado actualizado',`Empleado ${empleado.empleado.nombre} modificado con éxito`,'success');
      }
    );
  }


}
