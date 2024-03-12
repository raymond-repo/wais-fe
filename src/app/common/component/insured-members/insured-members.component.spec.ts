import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredMembersComponent } from './insured-members.component';

describe('InsuredMembersComponent', () => {
  let component: InsuredMembersComponent;
  let fixture: ComponentFixture<InsuredMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuredMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
