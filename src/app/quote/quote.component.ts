import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
 selector: 'app-quote',
 templateUrl: './quote.component.html',
 styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes: Quote[] = [
   new Quote(
     1,
     'Technology is cool,but you have got to use it as opposed to letting it use you.',
     'Andrew',
     'Brainy',
     new Date(2018, 5, 16),
     0,
     0),
   new Quote(
     2,
     'Your secrets are safe with me.',
     'Lexy',
     'Ruby',
     new Date(2018, 1, 20),
     0,
     0),
   new Quote(
     3,
     'Hope is a start.',
     'Albert',
     'Thomson',
     new Date(2019, 2, 16),
     0,
     0),
 ];
 upvote(index) {
   this.quotes[index].upvotes++;
 }
 downvote(index) {
   this.quotes[index].downvotes++;
 }
 highestUpvote() {
   // tslint:disable-next-line:no-unused-expression
   this.upvote;
 }
 completeQuote(isComplete, index) {
   if (isComplete) {
     this.quotes.splice(index, 1);
   }
 }
 deleteQuote(isComplete, index) {
   if (isComplete) {
     const toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?');
     if (toDelete) {
       this.quotes.splice(index, 1);
     }
   }
 }
 addNewQuote(quote) {
   const quoteLength = this.quotes.length;
   quote.id = quoteLength + 1;
   quote.completeDate = new Date(quote.completeDate);
   this.quotes.push(quote);
 }
 constructor() { }
 ngOnInit() {
 }
}









