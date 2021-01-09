import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordsGraphComponent } from './user-records-graph.component';

describe('UserRecordsGraphComponent', () => {
  let component: UserRecordsGraphComponent;
  let fixture: ComponentFixture<UserRecordsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecordsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecordsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
