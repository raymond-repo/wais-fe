import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgentMemberListModel } from '../../model/agent.model';

@Component({
  selector: 'app-agent-member',
  templateUrl: './agent-member.component.html',
  styleUrls: ['./agent-member.component.scss']
})
export class AgentMemberComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  protected formGroup: FormGroup;
  protected listOfMember: Array<any>;
  protected listOfData: Array<AgentMemberListModel>;
  protected showModal = false;
  protected searchValue = '';
  protected sortValue: string | null = null;
  protected controlNumber: string | null = null;
  protected member: string | null = null;

  ngOnInit() {
    this.initiateListData();
  }

  protected initiateListData() {
    this.listOfData = [
      {
        specifiedBranch: 'Tabango',
        controlNumber: '01/23/2021',
        member: 'Test',
        agent: 'Member',
        address: 'Member',
        birthday: 'Member',
        gender: 'Member',
        typeOfPlan: 'Member',
        planAmount: 'Member',
        dateOfApplication: 'Member'
      }
    ]

    this.listOfMember = [...this.listOfData];
  }

  protected exportToPdf(){

  }

  protected encodeReceipt() {
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

    if(sortBy === 'controlNumber') {

      const filterFunc = (item: AgentMemberListModel) => {
        return item.controlNumber.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: AgentMemberListModel) => filterFunc(item));
      this.listOfMember = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.controlNumber!] > b[this.controlNumber!]
            ? 1
            : -1
          : b[this.controlNumber!] > a[this.controlNumber!]
          ? 1
          : -1
      );
    } else if (sortBy === 'member') {
      const filterFunc = (item: AgentMemberListModel) => {
        return item.member.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: AgentMemberListModel) => filterFunc(item));
      this.listOfMember = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.member!] > b[this.member!]
            ? 1
            : -1
          : b[this.member!] > a[this.member!]
          ? 1
          : -1
      );
    }
  }

}
