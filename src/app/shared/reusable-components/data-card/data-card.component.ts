import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type CardType = 'normal' | 'danger' | 'warning' | 'success';

type CardWrapperClass = `covid-data-card covid-data-card--${CardType}`;

@Component({
  selector: 'shared-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
