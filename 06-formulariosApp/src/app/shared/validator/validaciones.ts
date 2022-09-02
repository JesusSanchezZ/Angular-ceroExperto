import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


 // Todo: Temporal

 export const noPuedeSerStrider = (control: FormControl) => {
  //console.log(control.value);
  const valor = control.value?.trim().toLowerCase();

  if(valor === 'strider') {
    // Error
    return {
      noStrider: true
    }
  }

  //console.log(valor);
  return null;
}

export const camposNoIguales: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass1 = control.get('password');
  const pass2 = control.get('password2');

  return ( pass1?.value !== pass2?.value )? { noIguales: true}: null;
}



// noPuedeSerStrider(control: FormControl) {
//   const valor = control.value?.trim().toLowerCase();

//   if(valor === 'strider') {
//     return {
//       noStrider: true
//     }
//   }

//   return null;
// }
