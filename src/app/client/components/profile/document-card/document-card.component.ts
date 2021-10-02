import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../../models';

@Component({
  selector: 'dj-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {
  @Input()
  document: Document;

  constructor() {}

  ngOnInit() {}
}
