import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencia: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }

  precioValido(): boolean {
    // console.log(this.miFormulario?.controls['precio']?.value > 0);
    return !(this.miFormulario?.controls['precio']?.value >= 0) &&
            this.miFormulario?.controls['precio']?.touched;
  }

  // guardar( miFormulario: NgForm ): void {
  guardar( ): void {
    //console.log(this.miFormulario.value);
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0
    });
  }

}
