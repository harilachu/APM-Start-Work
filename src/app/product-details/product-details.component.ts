import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../Interfaces/product';
import { ProductService } from '../Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = "Product Details";
  products: IProduct[] |undefined;
  product: IProduct |undefined;
  private productObservable: Subscription | undefined;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   this.productObservable = this.productService.getProducts().subscribe({
    next: products =>
    {
      this.products = products;
      this.product = this.products.find(x=>x.productId === id);
    },
    error: err=> this.errorMessage = err
    });
  }

  OnBack(): void{
    this.router.navigate(["/products"]);
  }

}
