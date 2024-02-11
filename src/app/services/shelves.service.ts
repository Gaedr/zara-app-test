import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shelf } from '../interfaces/shelf';
import { Template } from '../interfaces/template';

@Injectable({
  providedIn: 'root'
})
export class ShelvesService {
  private shelvesConfigurations: Shelf[] = [];

  constructor() { }

  getTemplates(): Observable<Template[]> {
    return of([{
      id: 'template_1',
      name: 'Default Template',
      align: 'left'
    },{
      id: 'template_2',
      name: 'Aesthetic Template',
      align: 'right'
    },{
      id: 'template_3',
      name: 'Center Template',
      align: 'center'
    }])
  }

  saveShelves(shelves: Shelf[]) {
    this.shelvesConfigurations = shelves;
    console.log(shelves)
  }
}
