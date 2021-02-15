import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, IProduct } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsComponent implements OnInit {
  delete = false;
  productToBeDeleted: any;
  products$: Observable<IProduct[]> = this.productsService.products$;
  productOpen?: boolean;
  selectedProduct?: IProduct;

  constructor(private productsService: ProductsService) { }
  
  ngOnInit() {}

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

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product: any): any {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event: any) {
    if (event && event.product) {
      if (this.selectedProduct) {
        // Edit Flow
        this.productsService.editProduct(this.selectedProduct.id!, event.product);
      } else {
        // Save New
        this.productsService.addProduct(event.product);
      }
    }
    this.productOpen = false;
  }
}
