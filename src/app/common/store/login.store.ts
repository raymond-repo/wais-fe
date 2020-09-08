import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { LoginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'login' })
export class LoginStore extends Store<LoginResponse> {
  constructor() {
    super({});
  }
}
