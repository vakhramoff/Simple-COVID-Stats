import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
})
export class MainLayoutComponent implements OnInit {
  @Input() title = 'COVID';

  constructor() {}

  ngOnInit(): void {}
}
