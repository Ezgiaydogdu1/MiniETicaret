import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit  {
  constructor(private productService:ProductService, spinner:NgxSpinnerService,private alertifyService: AlertifyService) {
    super(spinner)
   }
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = new MatTableDataSource<List_Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 async getProducts(){
  
   this.showSpinner(SpinnerType.BallAtom);
   const allProducts : List_Product[] =await this.productService.read(()=>this.hideSpinner(SpinnerType.BallAtom),
   errorMessage =>
    this.alertifyService.message(errorMessage,{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.BottomCenter

    }))
   this.dataSource=new MatTableDataSource<List_Product>(allProducts);
   this.dataSource.paginator=this.paginator;
  }
  async ngOnInit(){
   await this.getProducts();
    
  }
}
