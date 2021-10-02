import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from '../../../services';

@Component({
  selector: 'dj-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit {
  @Output()
  isCollapsedChange: EventEmitter<boolean> = new EventEmitter();
  isCollapsedValue: boolean;

  constructor(private token: TokenService) {}

  @Input()
  get isCollapsed(): boolean {
    return this.isCollapsedValue;
  }

  set isCollapsed(value: boolean) {
    this.isCollapsedValue = value;
    this.isCollapsedChange.emit(this.isCollapsedValue);
  }

  get showBecomeAnalyst(): boolean {
    return !this.token.isAnalyst();
  }

  ngOnInit() {}
}
