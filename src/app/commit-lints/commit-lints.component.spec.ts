import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitLintsComponent } from './commit-lints.component';

describe('CommitLintsComponent', () => {
  let component: CommitLintsComponent;
  let fixture: ComponentFixture<CommitLintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitLintsComponent]
    });
    fixture = TestBed.createComponent(CommitLintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
