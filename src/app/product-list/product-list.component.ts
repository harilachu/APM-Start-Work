import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../Interfaces/product';
import { ProductService } from '../Services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle:string = "Product List";
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage:boolean = true;

  private _listFilter!: string;
  errorMessage: any;
  private productObservable: Subscription | undefined;

  //Getter and Setter
  get ListFilter():string{
    return this._listFilter;
  }

  set ListFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter();
  }

  products:IProduct[] =[];

  filteredProducts:IProduct[]=[];

  private _productService: ProductService;

  constructor(private productService: ProductService) {
    this._productService = productService;
  }

  ngOnInit(): void {
    //this.products = this._productService.getProducts();
    this.productObservable = this._productService.getProducts().subscribe({
      next: products =>
      { this.products = products;
        this.filteredProducts = this.products;
      },
      error: err=> this.errorMessage = err
    }
    );

  }

  ngOnDestroy(): void {
      this.productObservable?.unsubscribe();
  }

  toggleImage(): void{
      this.showImage = !this.showImage;
  }

  performFilter():IProduct[]
  {
    return this.products.filter((product: IProduct)=> product.productName.toLowerCase().includes(this._listFilter.toLowerCase()));
  }

  onNotify(message: string): void {
    console.log(`received message: ${message}`);
    this.pageTitle = "Product List " + message;
  }

}
