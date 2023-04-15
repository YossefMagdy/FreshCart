import { products } from './../../InterFace/products';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:products[]=[]

  constructor(private _ProductsService:ProductsService,private _CartService:CartService){
    
  }
  ngOnInit(): void {
    this._ProductsService.getproduct().subscribe({
      next:(Response)=>{
       this.products=Response.data.reverse()
      }
    })
  }
  AddtoCart(id:string){
    this._CartService.AddtoCart(id).subscribe(
      {
        next:(Res)=>{
          this._CartService.numOfCartItems.next(Res.numOfCartItems)
        }
      }
    )
  }
}
