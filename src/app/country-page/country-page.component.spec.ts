import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CountryPageComponent } from './country-page.component';

describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountryPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
