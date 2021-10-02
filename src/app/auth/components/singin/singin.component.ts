import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services';
import { User } from '../../models';
import { Subscription } from 'rxjs';
import { ClrLoadingState } from '@clr/angular';
import { Token, MessageService, TokenService } from '../../../shared';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'dj-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  fg: FormGroup;
  btnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  forgotBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  unauthorized = false;
  forgotPassword = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: AuthService,
    private readonly tokenService: TokenService,
    private readonly message: MessageService,
    private readonly router: Router,
    private readonly notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  generateToken() {
    this.forgotBtnState = ClrLoadingState.LOADING;
    const email = this.fg.value.email;

    const sub = this.service.generateToken(email).subscribe(
      () => {
        sub.unsubscribe();
        this.forgotBtnState = ClrLoadingState.SUCCESS;
        this.forgotPassword = false;
        this.notification.success(
          'Senha solicitada',
          'Chegará informações no e-mail informado explicando como prosseguir com a redefinição de senha'
        );
      },
      () => {
        sub.unsubscribe();
        this.forgotBtnState = ClrLoadingState.ERROR;
      }
    );
  }

  login() {
    this.btnState = ClrLoadingState.LOADING;
    localStorage.clear();
    const user: User = this.fg.value;
    const subscription: Subscription = this.service.singin(user).subscribe(
      response => {
        this.btnState = ClrLoadingState.SUCCESS;
        this.loginSuccessful(response.data);
        subscription.unsubscribe();
      },
      error => {
        this.unauthorized = error.status === 401;
        this.btnState = ClrLoadingState.ERROR;
        subscription.unsubscribe();
      }
    );
  }

  private loginSuccessful(token: Token) {
    this.message.ok('Login efetuado com sucesso.');
    if (this.fg.value.remember) {
      this.tokenService.saveInLocalStorage(token);
    } else {
      this.tokenService.saveInSessionStorage(token);
    }
    this.router.navigate(['/client']);
  }

  private initForm() {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }
}
