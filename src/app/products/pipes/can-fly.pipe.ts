import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class FlyPipe implements PipeTransform {

  transform(value: boolean=false): string {
    return value?'Flying':'Does not Fly';
  }
}
