import { Component, Input, OnInit } from '@angular/core';

type TCardType = 'normal' | 'danger' | 'warning' | 'success';

@Component({
  selector: 'shared-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.sass'],
})
export class DataCardComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() value: string | number;
  @Input() type: TCardType = 'normal';

  constructor() {}

  ngOnInit(): void {}
}
