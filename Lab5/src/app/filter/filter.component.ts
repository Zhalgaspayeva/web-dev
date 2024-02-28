import { Component, Output, EventEmitter } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Product, products} from "../products";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() categorySelected = new EventEmitter<String>();

  categories = ['Все','Смартфоны', 'Часы', 'Ноутбуки', 'Аксессуары'];
  selectedCategory: string | null = null;
  showCategories: boolean = false;
  products = [...products];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  onCategorySelected(category: string) {
    this.categorySelected.emit(category);
    this.showCategories = false; // Скрыть категории после выбора категории
    this.products = this.getProductsByCategory(category);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products
  }
}
