import { Injectable } from '@angular/core';
import { Profile } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  profile: Profile;

  constructor() {}
}
