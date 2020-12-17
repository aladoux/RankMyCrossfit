import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecordWeiComponent } from './dialog-record-wei.component';

describe('DialogRecordWeiComponent', () => {
  let component: DialogRecordWeiComponent;
  let fixture: ComponentFixture<DialogRecordWeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRecordWeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRecordWeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
