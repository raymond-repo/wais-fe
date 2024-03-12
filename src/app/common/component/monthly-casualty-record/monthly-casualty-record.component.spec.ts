import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCasualtyRecordComponent } from './monthly-casualty-record.component';

describe('MonthlyCasualtyRecordComponent', () => {
  let component: MonthlyCasualtyRecordComponent;
  let fixture: ComponentFixture<MonthlyCasualtyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCasualtyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCasualtyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
