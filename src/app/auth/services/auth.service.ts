import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IUser } from '../models/user.model';
import { Router } from '@angular/router';
import { USERS } from '../constants/users.constant';

@Injectable({providedIn: "root"})

export class AuthService {
  public user: WritableSignal<IUser | null> = signal(JSON.parse(localStorage.getItem('user')!));
  #users: IUser[] = USERS;
  #router: Router = inject(Router);

  login(user: IUser, onSuccess?: Function, onFaild?: Function){
    const LOGIN_USER = this.#users.find(u => u.email == user.email && u.password == user.password);
    if(LOGIN_USER){
      localStorage.setItem('user',JSON.stringify(LOGIN_USER));
      this.profile();
      if(onSuccess){
        onSuccess(LOGIN_USER)
      }
    } else {
      if(onFaild){
        onFaild(LOGIN_USER)
      }
    }

  }

  profile(){
    this.user.set(JSON.parse(localStorage.getItem('user')!));
    if(this.user()){
      this.#router.navigate(['/']);
    } else {
      this.#router.navigate(['/auth']);
    }
  }

  profileByEmail(email:string): WritableSignal<IUser | null>{
    return signal(this.#users.find(user => user.email == email)!);
  }

  logout(){
    localStorage.removeItem('user');
    this.user.set(null);
    this.#router.navigate(['/auth']);
  }

}
