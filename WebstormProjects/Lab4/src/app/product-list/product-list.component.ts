import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

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
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
