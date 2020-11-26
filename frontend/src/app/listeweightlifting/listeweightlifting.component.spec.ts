import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ListeweightliftingComponent} from './listeweightlifting.component';


describe('ListeweightliftingComponent', () => {
  let component: ListeweightliftingComponent;
  let fixture: ComponentFixture<ListeweightliftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeweightliftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeweightliftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
