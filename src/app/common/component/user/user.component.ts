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

  ngOnInit() {
    this.initData();
  }

  private initData(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required]]
    });
  }

  public submitForm(): void {

  }

}
