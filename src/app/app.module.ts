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
import { TransmittalComponent } from './common/component/transmittal/transmittal.component';
import { AgentMemberComponent } from './common/component/agent-member/agent-member.component';
import { AgentRecordsComponent } from './common/component/agent-records/agent-records.component';
import { EmployeeDetailsComponent } from './common/component/employee-details/employee-details.component';
import { ApplicationFormComponent } from './common/component/application-form/application-form.component';
import { ReceiptEncodingComponent } from './common/component/receipt-encoding/receipt-encoding.component';
import { MonthlyCasualtyRecordComponent } from './common/component/monthly-casualty-record/monthly-casualty-record.component';
import { InsuredMembersComponent } from './common/component/insured-members/insured-members.component';
import { ReceiptRecordsComponent } from './common/component/receipt-records/receipt-records.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    TransmittalComponent,
    AgentMemberComponent,
    AgentRecordsComponent,
    EmployeeDetailsComponent,
    ApplicationFormComponent,
    ReceiptEncodingComponent,
    MonthlyCasualtyRecordComponent,
    InsuredMembersComponent,
    ReceiptRecordsComponent
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
