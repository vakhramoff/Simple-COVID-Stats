import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
