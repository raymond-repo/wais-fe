import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { LoginQuery } from '../../query/login.query';
import { StorageUtil } from '../../util/storage.util';
import { LoginRequest } from '../../model/login.model';
import { filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ObjectUtil } from '../../util/object.util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private message: NzMessageService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private loginQuery: LoginQuery,
    private router: Router) { }

  // Global Variable
  private isLoading: boolean;
  public formGroup: FormGroup;

  ngOnInit() {
    this.initGlobalVariable();
    this.initData();
    this.initError();
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  private initGlobalVariable(): void {
    this.isLoading = true;
  }

  private initData(): void {
    this.loginQuery.selectLoading().subscribe(res => this.isLoading = res);
    this.loginQuery.select()
      .pipe(
        take(2),
        filter(res => ObjectUtil.isNotEmpty(res.authorization)))
      .subscribe(res => {
        this.message.success('Welcome');
        StorageUtil.SET('auth', res.authorization);
        this.router.navigateByUrl('app/dashboard');
      });
  }

  private initError(): void {
    this.loginQuery.selectError()
      .pipe(filter(err => ObjectUtil.isNotEmpty(err)))
      .subscribe(res => {
        this.message.error(res.error.message);
      });
  }

  public submitForm(): void {
    const form = this.formGroup;
    if (form.valid) {
      const loginRequest: LoginRequest = {} as LoginRequest;
      loginRequest.username = form.get('userName').value;
      loginRequest.password = form.get('password').value;
      this.loginService.login(loginRequest);
    }
  }
}
