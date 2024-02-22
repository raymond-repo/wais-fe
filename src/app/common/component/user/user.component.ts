import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public formGroup: FormGroup;
  listOfData: any[] = [];
  displayData: ItemData[] = [];
  bordered = true;
  loading = false;
  sizeChanger = false;
  pagination = true;
  header = true;
  title = false;
  footer = false;
  fixHeader = true;
  size = 'medium';
  expandable = false;
  checkbox = false;
  allChecked = false;
  indeterminate = false;
  simple = false;
  noResult = false;
  position = 'bottom';

  currentPageDataChange($event: ItemData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i} Edward King ${i} Edward King ${i}`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`
      });
    }
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }

}

interface ItemData {
  name: string;
  age: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}