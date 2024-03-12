import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/component/login/login.component';
import { LayoutComponent } from './common/component/layout/layout.component';
import { HomeComponent } from './common/component/home/home.component';
import { WaisPageAuthGuard } from './common/config/wais-page-auth.guard';
import { TransmittalComponent } from './common/component/transmittal/transmittal.component';
import { AgentMemberComponent } from './common/component/agent-member/agent-member.component';
import { AgentRecordsComponent } from './common/component/agent-records/agent-records.component';
import { EmployeeDetailsComponent } from './common/component/employee-details/employee-details.component';
import { ApplicationFormComponent } from './common/component/application-form/application-form.component';
import { MonthlyCasualtyRecordComponent } from './common/component/monthly-casualty-record/monthly-casualty-record.component';
import { InsuredMembersComponent } from './common/component/insured-members/insured-members.component';
import { ReceiptRecordsComponent } from './common/component/receipt-records/receipt-records.component';

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
        path: 'application-form',
        component: ApplicationFormComponent,
      },
      {
        path: 'transmittal',
        component: TransmittalComponent,
      },
      {
        path: 'agent-members',
        component: AgentMemberComponent,
      },
      {
        path: 'agent-records',
        component: AgentRecordsComponent,
      },
      {
        path: 'employee-details',
        component: EmployeeDetailsComponent,
      },
      {
        path: 'monthly-casualty-records',
        component: MonthlyCasualtyRecordComponent,
      },
      {
        path: 'insured-members',
        component: InsuredMembersComponent,
      },
      {
        path: 'receipt-records',
        component: ReceiptRecordsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
