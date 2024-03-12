import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransmittalModel } from '../../model/transmittal.model';

@Component({
  selector: 'app-transmittal',
  templateUrl: './transmittal.component.html',
  styleUrls: ['./transmittal.component.scss']
})
export class TransmittalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
  }

  isVisible = false;

  public formGroup: FormGroup;

  demoValue = 100;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  isConfirmLoading = false;

  
  searchValue = '';
  sortControlNumber: string | null = null;
  sortAgent: string | null = null;
  sortReceiptNumber: string | null = null;
  sortValue: string | null = null;
  listOfSearchAddress: string[] = [];
  listOfData: Array<TransmittalModel> = [
    {
      controlNumber: 'PR123456789',
      agent: 'Test Agent',
      address: 'Test Address',
      typeOfPlan: 'Option1',
      planAmount: 'Option1',
      dateOfPayment: 'January 01, 2013',
      monthlyContribution: '1,000',
      runningBalance: '10,000',
      receiptNumber: 'PR123456'
    },{
      controlNumber: 'PR223456789',
      agent: '2',
      address: 'Test Address',
      typeOfPlan: 'Option2',
      planAmount: 'Option2',
      dateOfPayment: 'January 01, 2013',
      monthlyContribution: '1,000',
      runningBalance: '10,000',
      receiptNumber: 'PR123455'
    }
  ];
  listOfDisplayData = [...this.listOfData];

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      controlNumber: [{value: '', disabled: false}, [Validators.required]],
      agent: [null, [Validators.required]],
      address: [null, [Validators.required]],
      typeOfPlan: [null, [Validators.required]],
      planAmount: [null, [Validators.required]],
      dateOfPayment: [null, [Validators.required]],
      monthlyContribution: [null, [Validators.required]],
      runningBalance: [null, [Validators.required]],
      receiptNumber: [null, [Validators.required]]
    });
  }

  reset(sortBy: string): void {
    this.searchValue = '';
    this.search(sortBy);
  }

  search(sortBy: string): void {

    if(sortBy === 'controlnumber') {

      const filterFunc = (item: TransmittalModel) => {
        return item.controlNumber.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: TransmittalModel) => filterFunc(item));
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortControlNumber!] > b[this.sortControlNumber!]
            ? 1
            : -1
          : b[this.sortControlNumber!] > a[this.sortControlNumber!]
          ? 1
          : -1
      );
    } else if (sortBy === 'agent') {
      const filterFunc = (item: TransmittalModel) => {
        return item.agent.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: TransmittalModel) => filterFunc(item));
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortAgent!] > b[this.sortAgent!]
            ? 1
            : -1
          : b[this.sortAgent!] > a[this.sortAgent!]
          ? 1
          : -1
      );
    } else if (sortBy === 'receiptNumber') {
      const filterFunc = (item: TransmittalModel) => {
        return item.receiptNumber.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: TransmittalModel) => filterFunc(item));
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortReceiptNumber!] > b[this.sortReceiptNumber!]
            ? 1
            : -1
          : b[this.sortReceiptNumber!] > a[this.sortReceiptNumber!]
          ? 1
          : -1
      );
    }
  }

  addMember(){
    this.isVisible = true;
  }

  formSubmit(): void {
    this.isConfirmLoading = true;

    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
  }

  modalCancel(): void {
    this.isVisible = false;
    this.formGroup.reset();
  }

  viewDetails(data: TransmittalModel) {
    this.isVisible = true;
    this.setValue('controlNumber', data, true);
    this.setValue('agent', data, true);
    this.setValue('receiptNumber', data, true);
    this.setValue('address', data, true);
    this.setValue('typeOfPlan', data, true);
    this.setValue('planAmount', data, true);
    this.setValue('dateOfPayment', data, true);
    this.setValue('monthlyContribution', data, true);
    this.setValue('runningBalance', data, true);

    console.log(data.controlNumber);
  }

  setValue(field: string, data: TransmittalModel, isReadOnly: boolean) {
    this.formGroup.get(field).setValue(data[field])
    this.formGroup.get(field).disable({onlySelf: isReadOnly});
  }

}

