import { Pipe, PipeTransform } from '@angular/core';
import { profilesType, ProfileTypeEnum } from '../../shared/models/profile-type';

@Pipe({
  name: 'profileType'
})
export class ProfileTypePipe implements PipeTransform {
  transform(value: ProfileTypeEnum, args?: any): any {
    let aux: string;
    profilesType.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
