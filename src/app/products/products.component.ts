import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, IProduct } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsComponent {
  products$: Observable<IProduct[]> = this.productsService.products$;

  constructor(private productsService: ProductsService) { }
  trackById(index: any, item: any) {
    return item.id;
  }

  delete = false;
  productToBeDeleted : any;
  onDelete(product : any) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    // Need to implement this method removeProduct in our ProductService
    this.productsService.removeProduct(this.productToBeDeleted);
  }

}
