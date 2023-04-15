import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private _NgxSpinnerService:NgxSpinnerService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.method)
    if(request.method=='POST' || request.method=='PUT' ){
      return next.handle(request)
    }else{
      this._NgxSpinnerService.show();

      return next.handle(request).pipe(finalize(()=>this._NgxSpinnerService.hide()));
    }
   
  }
}