import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: '1',
    title: 'Producto 1',
    img: 'https://picsum.photos/200',
    price: {
      amount: 100,
      currency: 'EUR'
    }
  }, {
    id: '2',
    title: 'Product 2',
    img: 'https://picsum.photos/200',
    price: {
      amount: 20
    }
  }, {
    id: '3',
    title: 'Producto 3',
    img: 'https://picsum.photos/200',
    price: { amount: 10 }
  }, {
    id: '4',
    title: 'Product 4',
    img: 'https://picsum.photos/200',
    price: {amount: 15 }
  }];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByIds(productIds: string[]): Observable<Product[]> {
    return of(this.products.filter(product => productIds.includes(product.id)));
  }
}
