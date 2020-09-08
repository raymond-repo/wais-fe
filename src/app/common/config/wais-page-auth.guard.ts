import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageUtil } from '../util/storage.util';

@Injectable({
  providedIn: 'root'
})
export class WaisPageAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const auth = StorageUtil.GET('auth');
    if (!!auth) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
