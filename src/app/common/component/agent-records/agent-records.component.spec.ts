import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRecordsComponent } from './agent-records.component';

describe('AgentRecordsComponent', () => {
  let component: AgentRecordsComponent;
  let fixture: ComponentFixture<AgentRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
