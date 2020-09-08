import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/component/login/login.component';
import { LayoutComponent } from './common/component/layout/layout.component';
import { HomeComponent } from './common/component/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WaisHttpInterceptorConfig } from './common/config/wais-http-interceptor.config';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  LockOutline,
  UserOutline,
  LogoutOutline
} from '@ant-design/icons-angular/icons';
import { WaisPageAuthGuard } from './common/config/wais-page-auth.guard';
import { UserComponent } from './common/component/user/user.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzDropDownModule,
    NzSpinModule
  ],
  providers: [
    WaisPageAuthGuard,
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    {
      provide: NZ_ICONS,
      useValue: [
        MenuFoldOutline,
        MenuUnfoldOutline,
        DashboardOutline,
        FormOutline,
        LockOutline,
        UserOutline,
        LogoutOutline
      ]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WaisHttpInterceptorConfig,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
