import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Shelf } from './interfaces/shelf';
import { Template } from './interfaces/template';
import { ShelfComponent } from './components/shelf/shelf.component';
import { ShelvesService } from './services/shelves.service';
import { ProductService } from './services/product.service';
import { checkShelvesAreValid } from './utils/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ShelfComponent,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  zoom: number = 6;
  shelves: Shelf[] = [];
  templates: Template[] = [];

  constructor(
    private route: ActivatedRoute,
    private shelfService: ShelvesService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const productsIds: string[] = params.get('products')?.split(',') || [];
      this.shelfService.getTemplates().subscribe(templates => {
        this.templates = templates;
      });

      this.productService.getProductsByIds(productsIds).subscribe((products) => {
        this.shelves = [{
          products
        }]
      });
    });
  }

  doZoomIn() {
    this.zoom += 1;
  }

  doZoomOut() {
    this.zoom -= 1;
  }

  canSaveShelves(): Boolean {
    const shelves = this.shelves.slice(1, this.shelves.length);
    return checkShelvesAreValid(shelves);
  }

  addShelf() {
    this.shelves.push({
      products: [],
      template: 'none'
    });
  }

  saveConfiguration() {
    this.shelfService.saveShelves(this.shelves.slice(1, this.shelves.length));
  }
}
