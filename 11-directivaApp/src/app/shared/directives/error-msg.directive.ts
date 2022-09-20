import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( valor: string) {
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }

  // @Input() mensaje: string = 'Este campo es requerido*';
  @Input() set mensaje(valor: string){
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido( valor:boolean) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.remove('visually-hidden');
    }else{
      this.htmlElement.nativeElement.classList.add('visually-hidden')
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('Constructor directive');
    // console.log(el);

    // el.nativeElement.style.color = 'red';
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // // console.log(changes);
    // const mensaje = changes['mensaje'].currentValue;
    // // console.log(mensaje);
    // this.htmlElement.nativeElement.innerText = mensaje;

    // if( changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;

    // }
  }

  ngOnInit(): void {
    // console.log('NgOnInit directiva');
    // this.setColor();
    // this.setMensaje();
    this.setEstilo();
    // console.log(!!this.color);
   this.setColor();
   this.setMensaje();
  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
