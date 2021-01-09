import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisplayExerciseComponent } from './dialog-display-exercise.component';

describe('DialogDisplayExerciseComponent', () => {
  let component: DialogDisplayExerciseComponent;
  let fixture: ComponentFixture<DialogDisplayExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDisplayExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDisplayExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
