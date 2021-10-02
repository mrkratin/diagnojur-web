import { Component, OnInit } from '@angular/core';
import { TelephoneService } from '../../../../client/services';
import { Telephone } from '../../../../shared';
import { ProfileDataService } from '../profile-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dj-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  telephones: Telephone[];
  formGroup: FormGroup;
  isLoading = false;
  isLoading2 = false;

  constructor(
    private readonly storage: ProfileDataService,
    private readonly service: TelephoneService,
    private formBuilder: FormBuilder
  ) {}

  save() {
    this.isLoading = true;
    this.isLoading2 = true;
    this.saveTelephone();
    this.saveTelephone2();
  }

  private saveTelephone() {
    if (
      this.formGroup.value.stateCode1 !== '' &&
      this.formGroup.value.telephone1 !== ''
    ) {
      const {
        id1: id,
        stateCode1: stateCode,
        telephone1: telephone
      } = this.formGroup.value;
      if (id !== undefined && id !== '') {
        this.service.update({ id, stateCode, telephone, countryCode: '55' });
      } else {
        this.service
          .save({
            id: undefined,
            stateCode,
            telephone,
            countryCode: '55'
          })
          .subscribe(
            response => {
              this.isLoading = false;
              this.formGroup.controls.id1.setValue(response.data.id);
            },
            () => (this.isLoading = false)
          );
      }
    }
  }

  private saveTelephone2() {
    if (
      this.formGroup.value.stateCode2 !== '' &&
      this.formGroup.value.telephone2 !== ''
    ) {
      const {
        id2: id,
        stateCode2: stateCode,
        telephone2: telephone
      } = this.formGroup.value;
      if (id !== undefined && id !== '') {
        this.service.update({ id, stateCode, telephone, countryCode: '55' });
      } else {
        this.service
          .save({
            id: undefined,
            stateCode,
            telephone,
            countryCode: '55'
          })
          .subscribe(
            response => {
              this.isLoading2 = false;
              this.formGroup.controls.id2.setValue(response.data.id);
            },
            () => (this.isLoading2 = false)
          );
      }
    }
  }

  ngOnInit() {
    this.telephones = this.storage.profile.telephones;
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      id1: [this.telephones.length >= 1 ? this.telephones[0].id : ''],
      stateCode1: [
        this.telephones.length >= 1 ? this.telephones[0].stateCode : ''
      ],
      telephone1: [
        this.telephones.length >= 1 ? this.telephones[0].telephone : '',
        [Validators.minLength(8), Validators.maxLength(9)]
      ],
      id2: [this.telephones.length > 1 ? this.telephones[1].id : ''],
      stateCode2: [
        this.telephones.length > 1 ? this.telephones[1].stateCode : '',
        [Validators.minLength(2), Validators.maxLength(2)]
      ],
      telephone2: [
        this.telephones.length > 1 ? this.telephones[1].telephone : '',
        [Validators.minLength(8), Validators.maxLength(9)]
      ]
    });
  }
}
