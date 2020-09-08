import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserStore } from '../store/user.store';
import { UriConstants } from '../constant/uri.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private userStore: UserStore) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(UriConstants.USER_SAVE, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(UriConstants.USER_DELETE, {
      params: { id }
    });
  }

  getUser(): void {
    this.http.get<{ result: User[] }>(UriConstants.USER_FIND_ALL)
      .pipe()
      .subscribe(res => {
        this.userStore.update({ user: res.result });
        this.userStore.setLoading(false);
      });
  }
}
