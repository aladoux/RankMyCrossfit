import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListewodComponent } from './listewod.component';

describe('ListewodComponent', () => {
  let component: ListewodComponent;
  let fixture: ComponentFixture<ListewodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListewodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListewodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
