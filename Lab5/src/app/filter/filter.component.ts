import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  categories: string[] = ['Смартфоны', 'Ноутбуки', 'Аксессуары', 'Часы'];
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
