import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}
  Create(product: Create_Product, successCallBack?:any,errorCallBack?:(errorMessage:string)=>void) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe(
        (result) => {
        successCallBack();
        },
        (errorResponse: HttpErrorResponse) => {
          const _error: Array<{ key: string; value: Array<string> }> =
            errorResponse.error;
          let message = '';
          _error.forEach((v, index) => {
            v.value.forEach((_v, _index) => {
              message += `${_v}`;
            });
          });
          errorCallBack(message);
         
        }
      );
  }
 async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<List_Product[]>{
    const promiseData:Promise<List_Product[]>= this.httpClientService.get<List_Product[]>({
      controller:"products"
    }).toPromise();
    promiseData.then(d=>successCallBack)
    .catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.))
    return await promiseData;
  }
}