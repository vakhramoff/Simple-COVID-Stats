import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule],
})
export class FooterLayoutComponent {}
