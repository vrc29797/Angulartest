import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', userInfo.email);
  }

  public isLoggedIn(): boolean {
    if (localStorage.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getUserName(): string {
    return localStorage.getItem('ACCESS_TOKEN').toString();
  }
}
