import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderLayoutComponent } from './header-layout.component';

describe('HeaderLayoutComponent', () => {
  let component: HeaderLayoutComponent;
  let fixture: ComponentFixture<HeaderLayoutComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderLayoutComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
