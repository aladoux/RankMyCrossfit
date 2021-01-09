import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordsGraphWodComponent } from './user-records-graph-wod.component';

describe('UserRecordsGraphWodComponent', () => {
  let component: UserRecordsGraphWodComponent;
  let fixture: ComponentFixture<UserRecordsGraphWodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecordsGraphWodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecordsGraphWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
