import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../model/login.model';
import { LoginStore } from '../store/login.store';
import { UriConstants } from '../constant/uri.constants';
import { StorageUtil } from '../util/storage.util';
import { ResponseHandler } from '../model/response-handler.model';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private loginStore: LoginStore) { }

  public login(loginRequest: LoginRequest): void {
    StorageUtil.REMOVE('auth');
    this.http.post(UriConstants.LOGIN, loginRequest)
      .pipe(catchError((err) => {
        this.loginStore.setError(err);
        this.loginStore.setLoading(false);
        return throwError(err);
      }))
      .subscribe((responseHandler: ResponseHandler) => {
        this.loginStore.update(responseHandler.result);
        this.loginStore.setLoading(false);
      });
  }


  public verifyToken(token: string): boolean {
    let authorized = false;
    this.http.post(UriConstants.VERIFY_TOKEN, token)
      .subscribe((responseHandler: ResponseHandler) => {
        authorized = responseHandler.result as boolean;
      });
    return authorized;
  }

  public logout(): void {
    StorageUtil.REMOVE('auth');
    const loginResponse = {} as LoginResponse;
    loginResponse.authorization = '';
    this.loginStore.update(loginResponse);
    this.loginStore.setLoading(false);
  }
}
