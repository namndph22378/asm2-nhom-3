import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckuserComponent } from './checkuser.component';

describe('CheckuserComponent', () => {
  let component: CheckuserComponent;
  let fixture: ComponentFixture<CheckuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckuserComponent]
    });
    fixture = TestBed.createComponent(CheckuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
