import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifyRecordWeiComponent } from './dialog-modify-record-wei.component';

describe('DialogModifyRecordWeiComponent', () => {
  let component: DialogModifyRecordWeiComponent;
  let fixture: ComponentFixture<DialogModifyRecordWeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifyRecordWeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifyRecordWeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
