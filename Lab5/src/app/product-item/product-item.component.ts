import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;

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

  likeProduct() {
    if (this.product) {
      this.product.likes++;
    }
  }
}
