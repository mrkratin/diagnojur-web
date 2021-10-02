import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dj-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {
  @Input()
  description: string;

  constructor() {}

  ngOnInit() {}
}
