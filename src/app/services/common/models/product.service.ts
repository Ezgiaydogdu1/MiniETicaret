import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient.service';
import { Create_Product } from 'src/app/contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  Create(product:Create_Product){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=> {
      alert("işlem başarılı");
    })
  }
}
