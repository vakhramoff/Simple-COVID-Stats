import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterLayoutComponent } from './footer-layout.component';

describe('FooterLayoutComponent', () => {
  let component: FooterLayoutComponent;
  let fixture: ComponentFixture<FooterLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
