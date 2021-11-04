import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent {}
