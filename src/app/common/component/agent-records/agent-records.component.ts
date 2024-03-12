import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgentMonthlySaleReportModel } from '../../model/agent.model';

@Component({
  selector: 'app-agent-records',
  templateUrl: './agent-records.component.html',
  styleUrls: ['./agent-records.component.scss']
})
export class AgentRecordsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  protected formGroup: FormGroup;
  protected listOfMonthlySalesReport: Array<any>;
  protected listOfData: Array<AgentMonthlySaleReportModel>;
  protected showModal = false;
  protected searchValue = '';
  protected sortValue: string | null = null;
  protected specifiedBranch: string | null = null;
  protected receiptNumber: string | null = null;

  ngOnInit() {
    this.initiateListData();
  }

  protected initiateListData() {
    this.listOfData = [
      {
        specifiedBranch: 'Tabango',
        specifiedAgent: '01/23/2021',
        sequenceNumber: 'Test',
        membersName: 'Member',
        receiptNumber: 'Member',
        gross40: 'Member',
        gross25: 'Member',
        gross20: 'Member',
        gross15: 'Member',
        commission: '100'
      }
    ]

    this.listOfMonthlySalesReport = [...this.listOfData];
  }

  
  protected exportToPdf(){

  }

  protected encodeMonthlySales() {
    this.showModal = true;
  }

  modalCancel(): void {
    this.showModal = false;
    this.formGroup.reset();
  }

  submitForm() {
    console.log('Working');
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
  }

  protected reset(sortBy: string): void {
    this.searchValue = '';
    this.search(sortBy);
  }

  protected search(sortBy: string): void {

    if(sortBy === 'specifiedBranch') {

      const filterFunc = (item: AgentMonthlySaleReportModel) => {
        return item.specifiedBranch.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: AgentMonthlySaleReportModel) => filterFunc(item));
      this.listOfMonthlySalesReport = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.specifiedBranch!] > b[this.specifiedBranch!]
            ? 1
            : -1
          : b[this.specifiedBranch!] > a[this.specifiedBranch!]
          ? 1
          : -1
      );
    } else if (sortBy === 'receiptNumber') {
      const filterFunc = (item: AgentMonthlySaleReportModel) => {
        return item.receiptNumber.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: AgentMonthlySaleReportModel) => filterFunc(item));
      this.listOfMonthlySalesReport = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.receiptNumber!] > b[this.receiptNumber!]
            ? 1
            : -1
          : b[this.receiptNumber!] > a[this.receiptNumber!]
          ? 1
          : -1
      );
    }
  }

}
