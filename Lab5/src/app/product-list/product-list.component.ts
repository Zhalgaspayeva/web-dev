import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories = ['Смартфоны', 'Часы', 'Ноутбуки', 'Аксессуары'];
  selectedCategory: string | null = null;
  products = [...products];
  showCategories: boolean = false;

  setCurrentImage(product: Product, imageUrl: string): void {
    product.currentImage = imageUrl;
  }

  shareOnWhatsApp(link: string): void {
    const encodedLink = encodeURIComponent(link);
    window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
  }

  shareOnTelegram(link: string): void {
    const encodedLink = encodeURIComponent(link);
    window.open(`https://t.me/share/url?url=${encodedLink}`, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.showCategories = false; // Скрыть категории после выбора категории
    this.products = this.getProductsByCategory(category);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
  }

  likeProduct(product: Product): void {
    product.likes++; // Increase likes count
  }
}
