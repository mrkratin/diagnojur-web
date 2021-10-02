import { Pipe, PipeTransform } from '@angular/core';
import { ReplyReasonEnum, replyReasons } from '../models';

@Pipe({
  name: 'solicitationReplyReason'
})
export class SolicitationReplyReasonPipe implements PipeTransform {
  transform(value: ReplyReasonEnum, args?: any): any {
    let aux: string;
    replyReasons.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
