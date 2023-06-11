import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const productsParam = window.location.pathname.split('/search-results/')[1];
    this.products = JSON.parse(decodeURIComponent(productsParam));
  }
}
