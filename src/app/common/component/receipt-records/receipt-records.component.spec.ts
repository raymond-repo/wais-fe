import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptRecordsComponent } from './receipt-records.component';

describe('ReceiptRecordsComponent', () => {
  let component: ReceiptRecordsComponent;
  let fixture: ComponentFixture<ReceiptRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
