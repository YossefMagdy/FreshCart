import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from './enviroment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems=new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) {
    this.GetloggeduserCart().subscribe({
      next:(Resp)=>{
        this.numOfCartItems.next(Resp.numOfCartItems)
        
      }
    })
   }
   headers:any={
    token:localStorage.getItem('userToken')
   }
  AddtoCart(id:string):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+"cart",
    {
      productId:id
    }) 
  }
  GetloggeduserCart():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+"cart",
   ) 
  }
  RemoveSpecifiItem(id:string):Observable<any>{
    return this._HttpClient.delete(Enviroment.BaseUrl+"cart/"+id) 
  }
  UpdateCartProductQuantity(id:string,count:number):Observable<any>{
    return this._HttpClient.put(Enviroment.BaseUrl+"cart/"+id,{
      count:count
    }) 
  }
  ClearCart():Observable<any>{
    return this._HttpClient.delete(Enviroment.BaseUrl+"cart/") 
  }
  OnlinePayment(shippingAddress:object,id:string):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+`orders/checkout-session/${id}?url=http://localhost:4200`,
    {
      shippingAddress:shippingAddress
    }) 
  }
  GetAllOrders():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`orders/`) 
  }
}
