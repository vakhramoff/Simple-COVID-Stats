import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { APP_TITLE_TOKEN } from '../../tokens';

enum MenuStates {
  Opened = 'OPENED',
  Closed = 'CLOSED',
}

type MenuState = MenuStates;

@Component({
  selector: 'shared-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleMenu', [
      state(
        MenuStates.Closed,
        style({
          transform: 'scaleY(0)',
          height: '0px',
        }),
      ),
      state(
        MenuStates.Opened,
        style({
          transform: 'scaleY(1)',
        }),
      ),
      transition(`${MenuStates.Opened} => ${MenuStates.Closed}`, [animate('300ms ease-in-out')]),
      transition(`${MenuStates.Closed} => ${MenuStates.Opened}`, [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HeaderLayoutComponent {
  @Input()
  headerTitle = this.defaultAppTitle;

  @Input()
  headerSubTitle!: string;

  menuState: MenuState = MenuStates.Closed;

  constructor(
    @Inject(APP_TITLE_TOKEN)
    private readonly defaultAppTitle: string,
  ) {}

  toggleMenu(): void {
    switch (this.menuState) {
      case MenuStates.Closed:
        this.menuState = MenuStates.Opened;
        break;
      case MenuStates.Opened:
        this.menuState = MenuStates.Closed;
        break;
    }
  }
}
