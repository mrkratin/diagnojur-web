import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router
} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DjForms } from '../../../shared';
import { AuthService } from '../../services';
import { NzMessageService } from 'ng-zorro-antd';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'dj-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  id: number;
  token: string;
  formGroup: FormGroup;
  btnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.token = params.token;
      this.initForm();
    });
  }

  resetPassword() {
    this.btnState = ClrLoadingState.LOADING;
    const { id, token, password } = this.formGroup.value;

    const sub = this.service.resetPassword(id, token, password).subscribe(
      () => {
        sub.unsubscribe();
        this.btnState = ClrLoadingState.SUCCESS;
        this.message.success('Senha redefinida com sucesso');
        this.router.navigate(['/']);
      },
      () => {
        sub.unsubscribe();
        this.btnState = ClrLoadingState.ERROR;
      }
    );
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.id, [Validators.required]],
      token: [this.token, [Validators.required]],
      password: DjForms.Password()
    });
  }
}
