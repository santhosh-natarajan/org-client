import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.loginForm = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      rememberMe: [null],
    });
  }

  onClickLogin() { 
    console.table(this.loginForm.value);
  }
}
