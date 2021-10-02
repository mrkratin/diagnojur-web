import { Pipe, PipeTransform } from '@angular/core';
import { DiagnosisStatusEnum, diagnosticStatus } from '../models';

@Pipe({
  name: 'diagnosisStatus'
})
export class DiagnosisStatusPipe implements PipeTransform {
  transform(value: DiagnosisStatusEnum, args?: any): any {
    let aux: string;
    diagnosticStatus.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
