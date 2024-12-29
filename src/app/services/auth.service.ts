import { Injectable } from '@angular/core';
import { UserData, UserToRegister } from '../interfaces';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:2112';
  private token = '';
  private user = null;
  private isAuth = false;
  private isUser = false;
  private isUserAdmin = false;
  private isUserModerator = false;

  constructor() { }

  register(userData: UserData){
    return axios.post(`${this.baseUrl}/register`, userData);
  }

  login(credentials: UserToRegister){
    return axios.put(`${this.baseUrl}/register`, credentials)
  }
}
