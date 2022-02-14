import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { LoginRoutingModule } from './login-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox'



@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    LoginRoutingModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    PageLoginComponent
  ]
})
export class LoginModule { }
