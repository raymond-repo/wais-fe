import { Component, OnInit } from '@angular/core';
import { InsuredMemberModel } from '../../model/insured-member.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insured-members',
  templateUrl: './insured-members.component.html',
  styleUrls: ['./insured-members.component.scss']
})
export class InsuredMembersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  protected formGroup: FormGroup;
  protected listOfInsuredMembers: Array<any>;
  protected listOfData: Array<InsuredMemberModel>;
  protected showModal = false;
  protected searchValue = '';
  protected sortValue: string | null = null;
  protected membersName: string | null = null;
  protected branchAddress: string | null = null;

  ngOnInit() {
    this.initiateListData();
  }

  protected initiateListData() {
    this.listOfData = [
      {
        dateofApplication: 'Tabango',
        membersName: '01/23/2021',
        branchAddress: 'Test',
        agentName: 'Member',
        typeOfPlan: 'Test',
        beneficiary: '100',
        address: 'Test',
        birthday: '10',
        gender: '2'
      }
    ]

    this.listOfInsuredMembers = [...this.listOfData];
  }

  protected exportToPdf(){

  }

  protected encodeInsuredMember() {
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

    if(sortBy === 'membersName') {

      const filterFunc = (item: InsuredMemberModel) => {
        return item.membersName.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: InsuredMemberModel) => filterFunc(item));
      this.listOfInsuredMembers = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.membersName!] > b[this.membersName!]
            ? 1
            : -1
          : b[this.membersName!] > a[this.membersName!]
          ? 1
          : -1
      );
    } else if (sortBy === 'branch') {
      const filterFunc = (item: InsuredMemberModel) => {
        return item.branchAddress.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: InsuredMemberModel) => filterFunc(item));
      this.listOfInsuredMembers = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.branchAddress!] > b[this.branchAddress!]
            ? 1
            : -1
          : b[this.branchAddress!] > a[this.branchAddress!]
          ? 1
          : -1
      );
    }
  }
  

}
