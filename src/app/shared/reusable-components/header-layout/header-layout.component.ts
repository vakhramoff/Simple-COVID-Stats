import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

enum EMenuStates {
  opened = 'opened',
  closed = 'closed',
}

type TMenuState = EMenuStates;

@Component({
  selector: 'shared-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
})
export class HeaderLayoutComponent implements OnInit {
  @Input() headerTitle = 'COVID';
  @Input() headerSubTitle: string;

  public menuState: TMenuState = EMenuStates.closed;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    switch (this.menuState) {
      case EMenuStates.closed:
        this.menuState = EMenuStates.opened;
        break;
      case EMenuStates.opened:
        this.menuState = EMenuStates.closed;
        break;
    }
  }
}
