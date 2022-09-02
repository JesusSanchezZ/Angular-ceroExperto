import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.setValue(this.persona);         Marca error cuando no coinciden los formcontrol y la persona
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: false
    } );

    // en caso de querer enlazar el formulario con la persona se usa la siguiente instrucción
    // this.miFormulario.valueChanges.subscribe( form => {
    //   delete form.condiciones;
    //   this.persona = form;
    // });
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      this.persona = rest;
    })
  }

  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    console.log(formValue);
  }

}
