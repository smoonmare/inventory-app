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
  delete = false;
  productToBeDeleted: any;
  products$: Observable<IProduct[]> = this.productsService.products$;

  constructor(private productsService: ProductsService) { }
  trackById(index: number, item: any): number {
    return item.id;
  }

  onDelete(product: any): any {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel(): void {
    this.delete = false;
  }

  confirmDelete(): void {
    this.handleCancel();
    // Need to implement this method removeProduct in our ProductService
    this.productsService.removeProduct(this.productToBeDeleted);
  }

}
