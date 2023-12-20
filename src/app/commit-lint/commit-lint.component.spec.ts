import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitLintComponent } from './commit-lint.component';

describe('CommitLintComponent', () => {
  let component: CommitLintComponent;
  let fixture: ComponentFixture<CommitLintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitLintComponent]
    });
    fixture = TestBed.createComponent(CommitLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
