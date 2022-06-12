import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { DataCardComponent, MainLayoutComponent } from '../../layout';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MainLayoutComponent, DataCardComponent, TranslocoModule],
})
export class ErrorPageComponent {}
