import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  public isCollapsed: boolean;

  public sideMenu = [{
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    subMenu: []
  }, {
    name: 'Member',
    icon: 'user',
    path: '',
    subMenu: [{
      name: 'Record / Transmital',
      path: 'user',
      subMenu: []
    }]
  }, {
    name: 'Agent',
    icon: 'user',
    path: '',
    subMenu: [{
      name: 'Agent`s Member List',
      path: 'test2',
      subMenu: []
    }, {
      name: 'Agent`s Monthly Sales Report',
      path: 'test2',
      subMenu: []
    }]
  }, {
    name: 'Staff',
    icon: 'form',
    path: '',
    subMenu: [{
      name: 'Accounts',
      path: '',
      subMenu: [
        {
          name: 'User',
          path: 'user',
        }
      ]
    }, {
      name: 'Sub Menu 1',
      path: 'test2',
      subMenu: []
    }]
  }];

  ngOnInit() {
    this.initVariables();
  }

  private initVariables(): void {
    this.isCollapsed = false;
  }

  public logout() {
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }

  public test() {
    alert('test');
  }
}
