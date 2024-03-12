import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMemberComponent } from './agent-member.component';

describe('AgentMemberComponent', () => {
  let component: AgentMemberComponent;
  let fixture: ComponentFixture<AgentMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
