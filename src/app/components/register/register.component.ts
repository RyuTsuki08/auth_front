import { ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { UserData } from '../../interfaces';
@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterComponent {

  user: UserData = {
    username:  '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    created: new Date(Date.now()),
    avatar: '',
    token: ''
  }

  constructor(public authService: AuthService) {}

  register(event: Event) {
    event.preventDefault();
    console.log(this.user.username)
    // this.authService.register(this.user)
    // .then(response => {
    //   console.log( 'Registro exitoso' ,response);
    // })
    // .catch(error => {
    //   console.log('Error al registrar', error);
    //   });
  }
}
