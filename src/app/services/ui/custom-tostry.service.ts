import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomTostryService {

  constructor(private toastr: ToastrService) { }
  
  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    if (toastrOptions.messageType) {
      this.toastr[toastrOptions.messageType](message, title, { positionClass: toastrOptions.position });
    }
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType = ToastrMessageType.Error;
  position: ToastrPosition = ToastrPosition.BottomCenter;
}

export enum ToastrMessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

export enum ToastrPosition {
  TopCenter = 'toast-top-center',
  TopRight = 'toast-top-right',
  TopLeft = 'toast-top-left',
  BottomRight = 'toast-bottom-right',
  BottomCenter = 'toast-bottom-center',
  BottomLeft = 'toast-bottom-left',
  BottomFullWidth = 'toast-full-width',
  TopFullWidth = 'toast-top-full-width'
}
