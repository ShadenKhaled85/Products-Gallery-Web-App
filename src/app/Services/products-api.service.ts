import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../Environments/environment.deployment';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
 private backendUrl = enviroment.backendUrl

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.backendUrl}products`)
}
  getProductDetails(productId: string): Observable<Product>{
    return this.httpClient.get<Product>(`${this.backendUrl}products/${productId}`)
}

}
