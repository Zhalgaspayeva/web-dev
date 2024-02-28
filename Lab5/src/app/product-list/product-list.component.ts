import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  selectedCategory: String = "Все";

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

  removeProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
  }

  likeProduct(product: Product): void {
    product.likes++; // Increase likes count
  }

  onCategorySelected(category: String) {
    this.selectedCategory = category
    console.log(category)
  }

  isCategorySuitable(product: Product) {
    if (this.selectedCategory == "Все"){
      return true
    }
    return this.selectedCategory == product.category
  }
}
