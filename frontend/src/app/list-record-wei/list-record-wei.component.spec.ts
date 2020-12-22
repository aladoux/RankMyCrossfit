import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordWeiComponent } from './list-record-wei.component';

describe('ListRecordWeiComponent', () => {
  let component: ListRecordWeiComponent;
  let fixture: ComponentFixture<ListRecordWeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordWeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordWeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
