import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../../model/common.model';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  formGroup: FormGroup;

  protected listOfAgent: Array<DropdownModel>;
  protected listOfCasket: Array<DropdownModel>;
  protected listOfGender: Array<DropdownModel>;
  protected listOfBranches: Array<DropdownModel>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   this.initForm();
   this.getListOfAgent();
   this.getListOfCasket();
   this.getListOfGender();
  }


  protected initForm() {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      middleName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      age: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      placeOfBirth: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      permanentAddress: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      typeOfCasket: [null, [Validators.required]],
      membershipFee: [null, [Validators.required]],
      orNumber: [null, [Validators.required]],
      agent: [null, [Validators.required]],
      branch: [null, [Validators.required]],
      dateSigned: [null, [Validators.required]]
    });

  }

  
  protected submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
  }

  protected getListOfAgent(){
    this.listOfAgent = [{
      label: 'Raymond Benitez',
      value: 'AGENT1'
    }];
  }

  protected getListOfCasket(){
    this.listOfCasket = [{
      label: 'Casket 1',
      value: 'Casket1'
    }];
  }
  
  protected getListOfGender() {
    this.listOfGender = [{
      label: 'Male',
      value: 'M'
    }, {
      label: 'Female',
      value: 'F'
    }];
  }

  protected getListOfBranches() {
    this.listOfBranches = [{
      label: 'Tabango',
      value: 'tabango'
    }, {
      label: 'Ormoc City',
      value: 'ormoc'
    }];
  }
}
