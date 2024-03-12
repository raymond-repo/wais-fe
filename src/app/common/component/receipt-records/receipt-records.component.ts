import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceiptRecordsModel } from '../../model/receipt-records.model';

@Component({
  selector: 'app-receipt-records',
  templateUrl: './receipt-records.component.html',
  styleUrls: ['./receipt-records.component.scss']
})
export class ReceiptRecordsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  protected formGroup: FormGroup;
  protected listOfReceipt: Array<any>;
  protected listOfData: Array<ReceiptRecordsModel>;
  protected showModal = false;
  protected searchValue = '';
  protected sortValue: string | null = null;
  protected receiptNumber: string | null = null;
  protected membersName: string | null = null;

  ngOnInit() {
    this.initiateListData();
  }

  protected initiateListData() {
    this.listOfData = [
      {
        receiptNumber: 'Tabango',
        dateOfIssuance: '01/23/2021',
        membersName: 'Test',
        agentName: 'Member'
      }
    ]

    this.listOfReceipt = [...this.listOfData];
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

    if(sortBy === 'receiptNumber') {

      const filterFunc = (item: ReceiptRecordsModel) => {
        return item.receiptNumber.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: ReceiptRecordsModel) => filterFunc(item));
      this.listOfReceipt = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.receiptNumber!] > b[this.receiptNumber!]
            ? 1
            : -1
          : b[this.receiptNumber!] > a[this.receiptNumber!]
          ? 1
          : -1
      );
    } else if (sortBy === 'membersName') {
      const filterFunc = (item: ReceiptRecordsModel) => {
        return item.membersName.indexOf(this.searchValue) !== -1;
      };
      
      const data = this.listOfData.filter((item: ReceiptRecordsModel) => filterFunc(item));
      this.listOfReceipt = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.membersName!] > b[this.membersName!]
            ? 1
            : -1
          : b[this.membersName!] > a[this.membersName!]
          ? 1
          : -1
      );
    }
  }

}
