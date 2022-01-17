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
  displayData: Array<CategoryElement> = [];

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
          this.displayData = [...this.dataSource];
        });
      });
  }

  onChangeSearchKeyword(searchKeyword) {
    let filterArray = [...this.dataSource].filter((category) =>
      category.categoryName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.displayCategoriesData = filterArray;
  }

  get displayCategoriesData() {
    return this.displayData;
  }

  set displayCategoriesData(data: Array<CategoryElement>) {
    this.displayData = data;
  }
}
