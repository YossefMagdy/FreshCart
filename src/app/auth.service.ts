

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  UserData=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient,private _Router:Router){
    if(localStorage.getItem('userToken')!=null){
      this.decoded()
    }

  }
  register(userdata:object):Observable<any>{
    return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",userdata)
  }
  login(userdata:object):Observable<any>{
    return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",userdata)
  }
  decoded(){
    let EncodedCode=JSON.stringify(localStorage.getItem('userToken'))
    let DecodedCode:any=jwtDecode(EncodedCode);
    this.UserData.next(DecodedCode);
  }
  logout(){
    localStorage.removeItem('userToken')
    this._Router.navigate(['/login'])
    this.UserData.next(null)
  }
}
