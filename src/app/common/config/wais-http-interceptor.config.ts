import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageUtil } from '../util/storage.util';

@Injectable({
  providedIn: 'root'
})
export class WaisHttpInterceptorConfig implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = StorageUtil.GET('auth');
    const reqWithAut = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth}`
      }
    });
    return next.handle(reqWithAut);
  }
}
