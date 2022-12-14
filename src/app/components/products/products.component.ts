import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serves/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  @Input() title:string = '';
  @Input() type:string = '';

  products:Product[] = [];
  constructor(private productService: ProductService){}
  ngOnInit(): void {

    const getProducts = (data:any) => {
      this.products = data.data;
    };
    if (this.type == 'Featured')
      this.productService.getFeaturedProduct().subscribe(getProducts);
    else this.productService.getRecentProducts().subscribe(getProducts);
    }
}
