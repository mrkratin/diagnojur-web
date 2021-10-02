import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ClrLoadingState } from '@clr/angular';
import { AuthService } from '../../services';
import { User, CreatePerson } from '../../models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from '../../../shared';

@Component({
  selector: 'dj-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  fg: FormGroup;
  btnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: AuthService,
    private router: Router,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  singup() {
    this.btnState = ClrLoadingState.LOADING;
    localStorage.clear();
    const user: CreatePerson = this.fg.value;
    user.dateBirth = moment(user.dateBirth, 'DD-MM-YYYY').format();
    const subscription: Subscription = this.service.singup(user).subscribe(
      response => {
        this.btnState = ClrLoadingState.SUCCESS;
        subscription.unsubscribe();
        this.message.ok('Cadastro efetuado com sucesso');
        this.router.navigate(['/auth/singin']);
      },
      error => {
        this.btnState = ClrLoadingState.ERROR;
        subscription.unsubscribe();
      }
    );
  }

  private initForm() {
    this.fg = this.fb.group({
      name: '',
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(24)]
      ],
      cpf: '',
      dateBirth: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      ],
      indicator: ['']
    });

    this.fg.controls.name.valueChanges.subscribe(value => {
      const fullname = value
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

      if (value !== fullname) {
        this.fg.controls.name.setValue(fullname);
      }
    });
  }
}
