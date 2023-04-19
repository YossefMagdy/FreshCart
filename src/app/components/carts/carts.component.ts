import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/InterFace/card-details';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  loading:boolean=false
  Dready:boolean=false
  CartDetails!:CardDetails
  constructor(private _CartService:CartService){}
  UpdatSetTimeOut:any
  ngOnInit(): void {
    this._CartService.GetloggeduserCart().subscribe(
      {next:(Response)=>{
        
      this.CartDetails=Response.data
      }      }
    )
  }
  RemoveSpecifiItem(id:string){
    this.loading=true
    this._CartService.RemoveSpecifiItem(id).subscribe(
      {next:(Response)=>{
        this.CartDetails=Response.data
        
      },
      error:(error)=>console.log(error)
      }
    )
  }
  UpdateCartProductQuantity(id:string,count:number){
   
    clearTimeout(this.UpdatSetTimeOut)
   this.UpdatSetTimeOut=setTimeout(() => {

      if(count==0){
        this.RemoveSpecifiItem(id)
       }
       else{
        this._CartService.UpdateCartProductQuantity(id,count).subscribe(
          {next:(Response)=>{
            this.CartDetails=Response.data
            
            
          },
     
          }
        )
       }
    }, 500);

  }
  ClearCart(){
    this._CartService.ClearCart().subscribe(
      {next:(Response)=>{
        this.CartDetails=Response.data
        this._CartService.numOfCartItems.next(Response.numOfCartItems)
        
      }
      }
    )
  }

}
