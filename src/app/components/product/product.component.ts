import { Component, Input } from '@angular/core';
import { CommonModule, getCurrencySymbol } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'zara-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {
  @Input()
  data: Product = {
    id: '',
    title: '',
    img: '',
    price: { amount: 0 }
  };

  get productPrice(): string {
    return `${this.data.price.amount}${getCurrencySymbol(this.data.price.currency || 'EUR', 'wide')}`;
  }
}
