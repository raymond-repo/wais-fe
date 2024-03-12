import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEncodingComponent } from './receipt-encoding.component';

describe('ReceiptEncodingComponent', () => {
  let component: ReceiptEncodingComponent;
  let fixture: ComponentFixture<ReceiptEncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEncodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
