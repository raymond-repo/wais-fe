import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/login.model';
import { Query } from '@datorama/akita';
import { LoginStore } from '../store/login.store';

@Injectable({
  providedIn: 'root'
})
export class LoginQuery extends Query<LoginResponse> {

  constructor(protected loginStore: LoginStore) {
    super(loginStore);
  }
}
