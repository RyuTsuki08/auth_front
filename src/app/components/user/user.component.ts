import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
      isLoggedIn = false;
      isLoginFailed = false;
      errorMessage = '';
      roles: string[] = [];
      username = 'Tomas';
      password = '';
}
