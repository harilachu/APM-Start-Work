import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/product';
import productsJson from '../../api/products/products.json';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = "api/products/products.json";
  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.HandleError));

      // of(`Error: ${err}`)

    // productsJson.forEach(value=>{
    //   this.products.push(
    //         {
    //          'productId':value.productId,
    //         'description':value.description,
    //         "productName": value.productName,
    //         "productCode": value.productCode,
    //         "releaseDate": value.releaseDate,
    //         "price": value.price,
    //         "starRating": value.starRating,
    //         "imageUrl": value.imageUrl
    //        }
    //      )
    //  });

    // return this.products;
  }

  private HandleError(err: HttpErrorResponse) : Observable<never>
  {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `Error: ${err.error.message}`;
    }
    else
    {
      errorMessage = `server returned code: ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(new Error(errorMessage))
  }
}
