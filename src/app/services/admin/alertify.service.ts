import { Injectable } from '@angular/core';
declare var alertify:any;




@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, options: Partial<AlertifyOptions>) {
    if (options.messageType) {
      const messageType = options.messageType as MessageType;
      alertify.set('notifier', 'position', options.position);
      alertify.set('notifier', 'delay', options.delay)
      const msj = alertify[messageType](message);
      if (options.dismissOthers)
        msj.dismissOthers();
    }
  }
  
}
export class AlertifyOptions{
  messageType:MessageType=MessageType.Success;
  position:Position=Position.BottomCenter;
  delay:number=5;
  dismissOthers:boolean=true;

}
export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify", 
  Success = "success",
  Warning = "warning"
}

 export enum Position{
  TopCenter="top center",
  TopRight="top right",
  TopLeft="top left",
  BottomRight="bottom right",
  BottomCenter="bottom center",
  BottomLeft="bottom left"
 }