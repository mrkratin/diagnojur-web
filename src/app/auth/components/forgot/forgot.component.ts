import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';
import { NzMessageService } from 'ng-zorro-antd';
import { DjForms } from '../../../shared';

@Component({
  selector: 'dj-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  formGroup: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  generateToken() {
    this.isLoading = true;
    this.service.generateToken(this.formGroup.value.email).subscribe(
      response => {
        this.isLoading = false;
        this.message.success(
          'Redefinição de senha solicitada. Confirma seu email nos próximos instantes'
        );
        this.router.navigate(['/']);
      },
      error => (this.isLoading = false)
    );
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      email: DjForms.Email()
    });
  }
}
