import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from './enviroment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getproduct():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`products`)
  }
  getproductDetails(id:any):Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`products/${id}`)
  }
  getCategories():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`categories`)
  }
  getSpecCategories(id:any):Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`categories/${id}`)
  }
  getSubCategories():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`subcategories`)
  }
  getbrands():Observable<any>{
    return this._HttpClient.get(Enviroment.BaseUrl+`brands`)
  }

}
