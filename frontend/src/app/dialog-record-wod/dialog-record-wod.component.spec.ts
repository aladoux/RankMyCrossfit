import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecordWodComponent } from './dialog-record-wod.component';

describe('DialogRecordWodComponent', () => {
  let component: DialogRecordWodComponent;
  let fixture: ComponentFixture<DialogRecordWodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRecordWodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRecordWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
