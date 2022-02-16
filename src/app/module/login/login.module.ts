import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { LoginRoutingModule } from './login-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox'
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { AuthenticationService } from 'src/app/service/authentication.service';



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
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    PageLoginComponent
  ],
  providers: [AuthenticationService]
})
export class LoginModule { }
