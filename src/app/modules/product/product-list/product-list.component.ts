import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ProductService } from '../../../services/product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .pipe(first())
      .subscribe(users => this.products = users);
  }

  deleteProduct(id: string) {
    const product = this.products.find((x: { id: string; }) => x.id === id);
    product.isDeleting = true;
    this.productService.delete(id)
      .pipe(first())
      .subscribe(() => this.products = this.products.filter((x: { id: string; }) => x.id !== id));
  }
}
