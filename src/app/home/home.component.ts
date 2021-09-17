import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultsComponent } from '../pesquisa/search-results.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(SearchResultsComponent) searchResults: SearchResultsComponent;

  constructor() {}

  ngOnInit(): void {}

  search(query: string) {
    this.searchResults.search(query);
  }
}
