import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { APP_TITLE_TOKEN } from '../../utils/tokens';
import { FooterLayoutComponent } from '../footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderLayoutComponent, FooterLayoutComponent],
})
export class MainLayoutComponent {
  @Input()
  headerTitle = this.defaultAppTitle;

  @Input()
  headerSubTitle!: string;

  constructor(
    @Inject(APP_TITLE_TOKEN)
    private readonly defaultAppTitle: string,
  ) {}
}
