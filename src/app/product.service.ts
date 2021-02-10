import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number | null;
  name: string | null;
  active: boolean | null;
  expirationDate: string | null;
  description: string | null;
  type: string | null;
  features?: string[] | null;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: IProduct[] = [{
    id: generateId(),
    name: 'IPhone 12 Pro',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone 12',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone SE',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'Pixel 5',
    active: true,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'Pixel 3',
    active: true,
    description: 'Like Brand New',
    expirationDate: '12/31/21',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'NVidia Shield',
    active: true,
    description: 'Like Brand New',
    expirationDate: '09/30/21',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'IPad Pro',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'Kindle Fire HD',
    active: true,
    description: 'Used',
    expirationDate: '09/30/21',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'Sony PS5',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'console'
  }, {
    id: generateId(),
    name: 'Nintendo Switch',
    active: true,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'console'
  }, {
    id: generateId(),
    name: 'Xbox X',
    active: false,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'console'
  }, {
    id: generateId(),
    name: 'Sony Bravia',
    active: true,
    description: 'Brand New',
    expirationDate: '12/31/22',
    type: 'tv'
  }];
  products$ = new BehaviorSubject<IProduct[]>(this.products);

}
