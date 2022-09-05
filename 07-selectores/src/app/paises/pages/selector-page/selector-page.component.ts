import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators';

import { PaisSmall, PaisSmall1, RegionBloc } from '../../interfaces/regiones.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  // llenar selectores
  regiones: RegionBloc[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall1[] = [];
  cargando: boolean = false;

  constructor(private fb: FormBuilder,
              private paisesServices: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;
    //console.log(this.regiones);

    // Cuando cambie la region
    // this.miFormulario.get('region')?.valueChanges
    //     .subscribe( region => {
    //       // console.log(region);
    //       this.paisesServices.getPaisesPorRegion( region )
    //           .subscribe( paises => {
    //             this.paises = paises;
    //             console.log(this.paises);
    //           });
    //     });

    this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( () => {
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          switchMap( region => this.paisesServices.getPaisesPorRegion( region ))
        )
        .subscribe( paises => {
          this.paises = paises;
          this.cargando = false;
        });

    // Cuando cambie el País
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( () => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( codigo => this.paisesServices.getPaisPorCodigo(codigo)),
          switchMap( pais => this.paisesServices.getPaisesPorCodigos( pais?.[0].borders!))
        )
        .subscribe(
         paises => {
            //console.log( pais?.[0] );
            // this.fronteras =  pais?.[0].borders || [];
            // console.log(paises);
            this.fronteras = paises;
            this.cargando = false;
          }
        )
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
