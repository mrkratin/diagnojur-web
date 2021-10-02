import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

export enum DateMomentPipeType {
  FROM_NOW = 'FROM_NOW',
  DATE = 'DATE',
  DATE_TIME = 'DATE_TIME',
  RESUME_DATE = 'RESUME_DATE',
  RESUME_DATE_TIME = 'RESUME_DATE_TIME'
}

@Pipe({
  name: 'dateMoment'
})
export class DateMomentPipe implements PipeTransform {
  transform(value: moment.MomentInput, args?: DateMomentPipeType | any): any {
    if (value) {
      if (args === DateMomentPipeType.FROM_NOW) {
        return moment(value).fromNow();
      } else if (args === DateMomentPipeType.DATE) {
        return moment(value).format('LL');
      } else if (args === DateMomentPipeType.RESUME_DATE) {
        return moment(value).format('L');
      } else if (args === DateMomentPipeType.DATE_TIME) {
        return moment(value).format('LLL');
      } else if (args === DateMomentPipeType.RESUME_DATE_TIME) {
        return moment(value).format('L') + ' ' + moment(value).format('LT');
      } else {
        return moment(value).format('LL');
      }
    }
    return value;
  }
}
