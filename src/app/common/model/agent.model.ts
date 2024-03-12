export interface AgentMemberListModel {
  specifiedBranch: string;
  controlNumber: string;
  member: string;
  agent: string;
  address: string;
  birthday: string;
  gender: string;
  typeOfPlan: string;
  planAmount: string;
  dateOfApplication: string;
}

export interface AgentMonthlySaleReportModel {
  specifiedBranch: string;
  specifiedAgent: string;
  sequenceNumber: string;
  membersName: string;
  receiptNumber: string;
  gross40: string;
  gross25: string;
  gross20: string;
  gross15: string;
  commission: string;
}

