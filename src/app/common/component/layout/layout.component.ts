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

  public currentYear: any;

  public sideMenu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      path: 'dashboard',
      subMenu: []
    }, {
      name: 'E-Board',
      icon: 'bar-chart',
      path: '',
      subMenu: [
        {
          name: 'Application Form',
          path: 'application-form',
          subMenu: []
        },
        {
          name: 'Monthly Casualty Records',
          path: 'monthly-casualty-records',
          subMenu: []
        }, {
          name: 'Insured Members',
          path: 'insured-members',
          subMenu: []
        }, {
          name: 'Receipt Records',
          path: 'receipt-records',
          subMenu: []
        }]
    }, {
      name: 'Member',
      icon: 'audit',
      path: '',
      subMenu: [
        {
          name: 'Record / Transmital',
          path: 'transmittal',
          subMenu: []
        }
      ]
    }, {
      name: 'Agent',
      icon: 'usergroup-add',
      path: '',
      subMenu: [{
        name: 'Member List',
        path: 'agent-members',
        subMenu: []
      }, {
        name: 'Monthly Sales Report',
        path: 'agent-records',
        subMenu: []
      }]
    }, {
      name: 'Staff',
      icon: 'user',
      path: '',
      subMenu: [
        //   {
        //   name: 'Accounts',
        //   path: '',
        //   subMenu: [
        //     {
        //       name: 'User',
        //       path: 'user',
        //     }
        //   ]
        // }, 
        {
          name: 'Employee Details',
          path: 'employee-details',
          subMenu: []
        }]
    }];

  ngOnInit() {
    this.initVariables();
    this.currentYear = new Date().getFullYear();
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
