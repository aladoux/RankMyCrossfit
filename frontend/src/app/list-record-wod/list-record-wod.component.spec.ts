import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordWodComponent } from './list-record-wod.component';

describe('ListRecordWodComponent', () => {
  let component: ListRecordWodComponent;
  let fixture: ComponentFixture<ListRecordWodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordWodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
