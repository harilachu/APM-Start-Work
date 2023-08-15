import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/product';
import productsJson from '../../api/products/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [];
  constructor() { }

  getProducts(): IProduct[]
  {
    productsJson.forEach(value=>{
      this.products.push(
            {
             'productId':value.productId,
            'description':value.description,
            "productName": value.productName,
            "productCode": value.productCode,
            "releaseDate": value.releaseDate,
            "price": value.price,
            "starRating": value.starRating,
            "imageUrl": value.imageUrl
           }
         )
     });

    return this.products;
  }
}
