import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dj-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {
  @Output()
  isCollapsedChange: EventEmitter<boolean> = new EventEmitter();
  isCollapsedValue: boolean;

  constructor() {}

  @Input()
  get isCollapsed(): boolean {
    return this.isCollapsedValue;
  }

  set isCollapsed(value: boolean) {
    this.isCollapsedValue = value;
    this.isCollapsedChange.emit(this.isCollapsedValue);
  }

  ngOnInit() {}
}
