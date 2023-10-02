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
          errorCallBack?.(message);
         
        }
      );
  }
  async read(successCallBack: () => void, errorCallBack?: (errorMessage: string) => void): Promise<List_Product[]> {
    try {
        const promiseData: List_Product[] | undefined = await this.httpClientService.get<List_Product[]>({
            controller: "products"
        }).toPromise();
    
        if (promiseData !== undefined) {
            successCallBack?.();
            return promiseData;
        } else {
            // Handle the case where promiseData is undefined
            throw new Error("Data not available"); // You can throw an error or return a default value here
        }
    } catch (errorResponse) {
      //  errorCallBack?.(errorResponse.message);
        return []; // or any other appropriate default value
    }
}

  
}

  

