import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  //Los valores de los parámetros y el retorno pueden ser variables
  transform(value: string,toUpper:boolean = false): string {

    return toUpper? value.toUpperCase():value.toLowerCase();
  }
}
