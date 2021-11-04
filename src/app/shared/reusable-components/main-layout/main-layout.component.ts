import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { APP_TITLE_TOKEN } from '../../tokens';

@Component({
  selector: 'shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  @Input() headerTitle = this.defaultAppTitle;
  @Input() headerSubTitle!: string;

  constructor(
    @Inject(APP_TITLE_TOKEN)
    private readonly defaultAppTitle: string,
  ) {}
}
