import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as toastr from 'toastr';
import Swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'mapasApp';
  muestra = false;
  @ViewChild('dTable', {static: false}) dataTable: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    // $('#example').DataTable();
    $(this.dataTable.nativeElement).DataTable({
      lengthMenu: [
        [3,5,10,-1],
        [3,5,10,'Todos'],
      ],
      language: {
        lengthMenu: 'Mostrando _MENU_ Datos por tabla',
        zeroRecords: 'No hay datos que mostrar',
        info: 'Mostrando página _PAGE_ de _PAGES_',
        infoEmpty: 'No hay datos disponibles',
        infoFiltered: '(filtrados de _MAX_ registros en total',
        Previous: 'Anterior',
        Next: 'Siguiente',
        search: 'Buscar',
      }
    });
  }

  genera(){
    toastr.info('Este es un toaster desde Angular','Funciona',{
      closeButton: true,
      closeDuration: 2000,
    });

    Swal.fire({
      title: 'Hola',
      text: 'Quieres continuar',
      icon: 'error',
      confirmButtonText: 'Cool'
    });

    this.muestra = true;
  }
}


/**
 * instalamos la paquetería de javascript
 *  npm i "libreria"
 *
 * importamos en el proyecto
 *  var "libreria" = require('paht');
 *  |--> nuevo formato de ecma script
 *       import "libreria" from 'path';
 *
 * importamos el typado
 *  npm i @types/"libreria"
 *
 *  vuelve a marcar error pero se soluciona con;
 *  import * "libreria" from path
 *
 *
 * implementación de datatable.net
 *
 * instalamos jquery
 * npm i jquery
 *
 * instalamos datatable.net
 * npm i datatable.net-dt
 *
 * agregamos el estilo css y los js al archivo angular.json
 * "styles": [
              "src/styles.css",
              "node_modules/datatables.net-dt/css/jquery.dataTables.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/datatables.net/js/jquery.dataTables.js"
            ]


 */
