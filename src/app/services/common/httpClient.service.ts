// import { Inject, Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpClientService {
//   constructor(private hhtpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) { }
//   private url(requestParameter: Partial<RequestParameters>):string {
//     return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;

//   }
//   get<T>(requestParameter: Partial<RequestParameters>, id?:string ){
//     let url :string ="";
//     if (requestParameter.fullEndPoint)
//       url =requestParameter.fullEndPoint;
//     else
//     url =`${this.url(requestParameter)}`;
//     this.hhtpClient.get()
//   }
//   post(){}
//   put(){}
//   delete(){}
// }
// export class RequestParameters{
//   controller?:string;
//   action ?:string;
//   headers ?:  HttpHeaders;
//   baseUrl ?: string;
//   fullEndPoint ?: String
// }