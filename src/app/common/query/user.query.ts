import { Query } from '@datorama/akita';
import { UserState, UserStore } from '../store/user.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  constructor(protected userStore: UserStore) {
    super(userStore);
  }
}
