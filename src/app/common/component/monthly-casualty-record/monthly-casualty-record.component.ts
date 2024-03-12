import { Component, OnInit } from '@angular/core';
import { MonthlyCasualtyRecordModel } from '../../model/casualty.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monthly-casualty-record',
  templateUrl: './monthly-casualty-record.component.html',
  styleUrls: ['./monthly-casualty-record.component.scss']
})
export class MonthlyCasualtyRecordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  protected formGroup: FormGroup;
  protected listOfData: Array<MonthlyCasualtyRecordModel>;
  protected listOfMonthlyCasualtyRecord: Array<any>;
  protected searchValue = '';
  protected sortValue: string | null = null;
  protected specifiedBranch: string | null = null;
  protected nameOfDeceased: string | null = null;
  protected showModal = false;

  ngOnInit() {
    this.initiateListData();
    this.initForm();
  }

  protected initiateListData() {
    this.listOfData = [
      {
        specifiedBranch: 'Tabango',
        date: '01/23/2021',
        nameOfDeceased: 'Test',
        address: 'Test',
        membership: 'Member',
        typeOfPlan: 'Test',
        planPrice: '100',
        monthlyContribution: '10',
        contribution: '2',
        discount: '1%',
        governmentAssistance: 'Yes',
        cashDeposit: 'Test',
        paymentStatus: 'Paid'
      },{
        specifiedBranch: 'Tabango1',
        date: '01/23/2021',
        nameOfDeceased: 'Test1',
        address: 'Test',
        membership: 'Member',
        typeOfPlan: 'Test',
        planPrice: '100',
        monthlyContribution: '10',
        contribution: '2',
        discount: '1%',
        governmentAssistance: 'Yes',
        cashDeposit: 'Test',
        paymentStatus: 'Paid'
      }
    ]

    this.listOfMonthlyCasualtyRecord = [...this.listOfData];
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      specifiedBranch: [{value: '', disabled: false}, [Validators.required]],
      date: [null, [Validators.required]],
      nameOfDeceased: [null, [Validators.required]]
    });
  }

  protected reset(sortBy: string): void {
    this.searchValue = '';
    this.search(sortBy);
  }

  protected search(sortBy: string): void {

    if(sortBy === 'specifiedBranch') {

      const filterFunc = (item: MonthlyCasualtyRecordModel) => {
        return item.specifiedBranch.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: MonthlyCasualtyRecordModel) => filterFunc(item));
      this.listOfMonthlyCasualtyRecord = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.specifiedBranch!] > b[this.specifiedBranch!]
            ? 1
            : -1
          : b[this.specifiedBranch!] > a[this.specifiedBranch!]
          ? 1
          : -1
      );
    } else if (sortBy === 'nameOfDeceased') {
      const filterFunc = (item: MonthlyCasualtyRecordModel) => {
        return item.nameOfDeceased.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: MonthlyCasualtyRecordModel) => filterFunc(item));
      this.listOfMonthlyCasualtyRecord = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.nameOfDeceased!] > b[this.nameOfDeceased!]
            ? 1
            : -1
          : b[this.nameOfDeceased!] > a[this.nameOfDeceased!]
          ? 1
          : -1
      );
    }
  }

  protected exportToPdf(){

  }

  protected encodeCasualty() {
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

}
