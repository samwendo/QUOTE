import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
 quoteDelete(complete: boolean) {
  this.isComplete.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}
