import { Pipe, PipeTransform } from '@angular/core';
import { OAB } from '../models';

@Pipe({
  name: 'oab'
})
export class OabPipe implements PipeTransform {
  transform(value: OAB, args?: any): any {
    return `${value.oab} / ${value.uf}`;
  }
}
