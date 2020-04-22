import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataCardComponent } from './data-card.component';

describe('DataCardComponent', () => {
  let component: DataCardComponent;
  let fixture: ComponentFixture<DataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
