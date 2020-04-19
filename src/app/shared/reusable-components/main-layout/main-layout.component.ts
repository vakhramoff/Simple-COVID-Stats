import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

enum EMenuStates {
  opened = 'opened',
  closed = 'closed',
}

type TMenuState = EMenuStates;

@Component({
  selector: 'shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  animations: [
    trigger('toggleMenu', [
      state(
        EMenuStates.closed,
        style({
          transform: 'scaleY(0)',
          height: '0px',
        }),
      ),
      state(
        EMenuStates.opened,
        style({
          transform: 'scaleY(1)',
        }),
      ),
      transition(`${EMenuStates.opened} => ${EMenuStates.closed}`, [animate('300ms ease-in-out')]),
      transition(`${EMenuStates.closed} => ${EMenuStates.opened}`, [animate('300ms ease-in-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  @Input() headerTitle = 'COVID';
  @Input() headerSubTitle: string;

  public menuState: TMenuState = EMenuStates.closed;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuState = this.menuState === EMenuStates.opened ? EMenuStates.closed : EMenuStates.opened;
  }
}
