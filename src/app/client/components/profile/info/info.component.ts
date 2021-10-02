import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../admin/models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ProfileDataService } from '../profile-data.service';
import { PersonService } from '../../../../shared/services';
import { DjForms } from '../../../../shared/models';
import * as moment from 'moment';
import { PersonUpdate } from '../../../models';

@Component({
  selector: 'dj-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  loading = false;
  profile: Profile;
  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly storage: ProfileDataService,
    private readonly service: PersonService,
    private readonly message: NzMessageService
  ) {}

  readonly formatterReal = (value: number) => `R$ ${value}`;

  readonly parserReal = (value: string) => value.replace('R$ ', '');

  ngOnInit() {
    this.profile = this.storage.profile;
    this.initForm();
  }

  confirmValidator = (control: FormControl): ValidationErrors | null => {
    if (this.formGroup) {
      if (control.value !== this.formGroup.controls.password.value) {
        return { confirm: true, error: true };
      }
    }
    return {};
  };

  save() {
    this.loading = true;

    const person: PersonUpdate = {
      id: this.formGroup.value.id,
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
        ? this.formGroup.value.password === ''
          ? undefined
          : this.formGroup.value.password
        : undefined,
      dateBirth: this.formGroup.value.dateBirth
    };

    this.service.update(person).subscribe(
      () => {
        this.message.success('Seus dados foram salvos');
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.profile.id, [Validators.required]],
      name: DjForms.Name(this.profile.name),
      email: DjForms.Email(this.profile.email),
      password: [
        undefined,
        [Validators.minLength(6), Validators.maxLength(24)]
      ],
      repassword: [undefined, [this.confirmValidator]],
      cpf: DjForms.CPF(this.profile.cpf),
      registry: [this.profile.registry, [Validators.required]],
      dateBirth: [
        moment(this.profile.dateBirth).toDate(),
        [Validators.required]
      ],
      wallet: [this.profile.wallet.balance, [Validators.required]]
    });
  }
}
