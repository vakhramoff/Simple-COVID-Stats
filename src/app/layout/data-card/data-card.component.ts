import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

export type CardType = 'normal' | 'danger' | 'warning' | 'success';

type CardWrapperClass = `covid-data-card covid-data-card--${CardType}`;

@Component({
  selector: 'data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconSpriteModule],
})
export class DataCardComponent {
  @Input()
  icon!: string;

  @Input()
  title!: string;

  @Input()
  value!: string | number;

  @Input()
  type: CardType = 'normal';

  get cardWrapperClass(): CardWrapperClass {
    return `covid-data-card covid-data-card--${this.type}`;
  }
}
