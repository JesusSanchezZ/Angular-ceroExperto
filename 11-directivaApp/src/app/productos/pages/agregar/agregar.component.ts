import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  mensaje: string = 'Este campo es necesario';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean {
    return (this.miFormulario.get(campo)?.invalid
        && this.miFormulario.get(campo)?.touched) || false;
  }

  cambiaMsg():void {
    // this.mensaje = 'mensaje cambia';
    this.mensaje = Math.random().toString()
  }

  cambiaColor():void {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
  }

}
