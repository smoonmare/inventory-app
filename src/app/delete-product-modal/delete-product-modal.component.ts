import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'in-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {
  @Input() product: any;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancelDelete() {
    this.cancel.emit;
  }

  confirmDelete() {
    this.confirm.emit();
  }

}
