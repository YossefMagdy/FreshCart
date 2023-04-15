import { products } from './../../InterFace/products';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productName:string=''
  products:products[]=[]
  constructor(private _ProductsService:ProductsService,private _CartService:CartService){
    
  }
  ngOnInit(): void {

    this._ProductsService.getproduct().subscribe({
      next:(res)=>{

        this.products=res.data.reverse()
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
