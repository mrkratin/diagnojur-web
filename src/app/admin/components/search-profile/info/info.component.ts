import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Profile, UpdatePersonAdmin } from '../../../models';
import { ProfileDataService } from '../profile-data.service';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../../services';
import { NzMessageService } from 'ng-zorro-antd';
import { DjForms, ProfileTypeEnum } from '../../../../shared/models';
import * as moment from 'moment';

@Component({
  selector: 'dj-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  profile: Profile;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private storage: ProfileDataService,
    private service: PersonService,
    private messageService: NzMessageService
  ) {}

  get disabledSaveBtn(): boolean {
    return this.formGroup.invalid;
  }

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
    const date: Date = this.formGroup.value.dateBirth;
    const aux: string = moment(date, 'DD/MM/YYYY').format();
    const updatePerson: UpdatePersonAdmin = this.formGroup.value;
    updatePerson.dateBirth = new Date(aux);
    updatePerson.wallet = this.formGroup.value.wallet / 100;
    this.service.updatePerson(updatePerson).subscribe(
      (response) => {
        this.messageService.success('Informações salvas com sucesso.');
      },
      (error) => {}
    );
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.profile.id, [Validators.required]],
      name: DjForms.Name(this.profile.name),
      email: DjForms.Email(this.profile.email),
      password: ['', [Validators.minLength(6), Validators.maxLength(24)]],
      repassword: ['', [this.confirmValidator]],
      cpf: DjForms.CPF(this.profile.cpf),
      registry: [this.profile.registry, [Validators.required]],
      dateBirth: [
        moment(this.profile.dateBirth).toDate(),
        [Validators.required],
      ],
      wallet: [
        this.profile.wallet.balance,
        [Validators.required, Validators.min(0)],
      ],
      roleAnalyst: [
        {
          value: this.profile.roles.includes(ProfileTypeEnum.ROLE_ANALYST),
          disabled: true,
        },
        Validators.required,
      ],
      roleClient: [
        {
          value: this.profile.roles.includes(ProfileTypeEnum.ROLE_CLIENT),
          disabled: true,
        },
        Validators.required,
      ],
      roleAdmin: [
        this.profile.roles.includes(ProfileTypeEnum.ROLE_ADMIN),
        [Validators.required],
      ],
      roleRoot: [this.profile.roles.includes(ProfileTypeEnum.ROLE_ROOT)],
    });
  }
}
