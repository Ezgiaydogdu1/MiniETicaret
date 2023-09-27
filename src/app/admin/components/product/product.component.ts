import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

import { HttpClientService } from 'src/app/services/common/httpClient.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService ,private httpClientService:HttpClientService){
    super(spinner)
  }
ngOnInit(): void {
  
  
}
}
