import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/services/juego';
import { JuegoService } from 'src/app/services/juego.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: string = 'Formulario Juegos'
  juego: Juego = new Juego();
  submitted: boolean = false;


  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    categoria: new FormControl(''),
    precio: new FormControl(''),
    fechaEstreno: new FormControl(''),
    imagen: new FormControl('')
  });

  constructor(private juegoService: JuegoService, private router: Router,
    private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getJuego();
    this.form = this.formBuilder.group(
      {
        nombre: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ]
        ],
        descripcion: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(300)
          ],
        ],
        precio: ['',
          [
            Validators.required, Validators.min(1), Validators.max(99999999)
          ]
        ],
        categoria: ['',
          [
            Validators.required
          ]
        ],
        fechaEstreno: ['',
          [
            Validators.required
          ]
        ],
        imagen: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(300)
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //este método es el que llama al método createJuego solo si el formulario está validado
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.createJuego();
  }
  onSubmitUpdate(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.updateJuego();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public createJuego(): void {
    this.juegoService.createJuego(this.juego).subscribe(
      juego => {
        this.router.navigate(['/juegos'])
        swal('Juego nuevo', `El juego ${juego.nombre} ha sido registrado correctamente!!!.`, 'success');
      }
    )
  }

  public getJuego(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.juegoService.getJuego(id).subscribe(
          (juego) => this.juego = juego
        )
      }
    })
  }

  public updateJuego(): void {
    this.juegoService.updateJuego(this.juego).subscribe(
      juego => {
        this.router.navigate(['/juegos'])
        swal('Juego actualizado', `Juego ${juego.juego.nombre} modificado con éxito!!!`, 'success');
      }
    )
  }



}