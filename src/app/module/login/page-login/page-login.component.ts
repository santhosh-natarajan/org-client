import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  API_FAILED,
  CANCEL,
  INVALID_FORM_ALERT,
  LODING_ALERT,
  OKAY,
  VALID_FORM_ALERT,
} from 'src/app/const/alert.const';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  loginForm!: FormGroup;
  matcher = new ErrorStateMatcher();

  constructor(
    private _fb: FormBuilder,
    private _snackbar: MatSnackBar,
    private _authentication: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.loginForm = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rememberMe: [null],
    });
  }

  async onClickLogin() {
    if (!this.loginForm.invalid) {
      let apiRes = await this.connectWithLoginService();
      console.log('From login', apiRes);
    } else {
      this._snackbar.open(`${INVALID_FORM_ALERT}`, `${OKAY}`);
    }
  }

  async connectWithLoginService(): Promise<any> {
    let apiReq = {
      usernameOrEmail: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    this._snackbar.open(`${LODING_ALERT}`, `${OKAY}`);
    let apiRes = await this._authentication.login(apiReq);
    if (apiRes.status === true) {
      this._snackbar.open(`${VALID_FORM_ALERT}`, `${OKAY}`);
    } else {
      this._snackbar.open(`${API_FAILED}`, `${OKAY}`);
    }
    return apiRes;
  }
}
