import { Store, StoreConfig } from '@datorama/akita';
import { User } from '../model/user.model';
import { Injectable } from '@angular/core';

export interface UserState {
  user: User[];
}

export function createInitialState(): UserState {
  return {
    user: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
