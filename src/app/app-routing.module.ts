import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/component/login/login.component';
import { LayoutComponent } from './common/component/layout/layout.component';
import { HomeComponent } from './common/component/home/home.component';
import { WaisPageAuthGuard } from './common/config/wais-page-auth.guard';
import { UserComponent } from './common/component/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [WaisPageAuthGuard],
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'test2',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
