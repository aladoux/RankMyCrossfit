import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifyRecordWodComponent } from './dialog-modify-record-wod.component';

describe('DialogModifyRecordWodComponent', () => {
  let component: DialogModifyRecordWodComponent;
  let fixture: ComponentFixture<DialogModifyRecordWodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifyRecordWodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifyRecordWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
