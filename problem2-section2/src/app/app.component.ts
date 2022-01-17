import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface CategoryElement {
  categoryName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  dataSource: Array<CategoryElement> = [];

  title = 'problem2-section2';
  displayedColumns: string[] = ['position', 'categoryName'];
  searchFilterKeyword: string = '';

  ngOnInit() {
    this.http
      .get('https://api.publicapis.org/categories ')
      .subscribe((response) => {
        const categories = response as Array<string>;
        categories.forEach((category) => {
          this.dataSource.push({ categoryName: category });
        });
      });
  }
}
