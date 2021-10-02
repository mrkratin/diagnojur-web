import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dj-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
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
