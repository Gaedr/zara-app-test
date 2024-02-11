import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDropListGroup, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Shelf } from '../../interfaces/shelf';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';
import { Template } from '../../interfaces/template';

@Component({
  selector: 'zara-shelf',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.sass'
})
export class ShelfComponent {
  private maxItemsByShelf: number = 3;
  @Input() templates: Template[] = [];
  @Input() shelves: Shelf[] = [];
  @Output() shelvesChange = new EventEmitter<Shelf[]>();

  onDrop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  moveShelfToDown(shelfNumber: number) {
    moveItemInArray(this.shelves, shelfNumber, shelfNumber + 1);
  }

  moveShelfToUp(shelfNumber: number) {
    moveItemInArray(this.shelves, shelfNumber, shelfNumber - 1);
  }

  removeShelf(shelfIndex: number) {
    this.shelves[0].products.push(...this.shelves[shelfIndex].products);
    this.shelves.splice(shelfIndex, shelfIndex);
  }
}
