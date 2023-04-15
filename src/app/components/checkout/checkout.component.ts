import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  loading:boolean=false
  CartId:any
  constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute,private _Router:Router){
    this._ActivatedRoute.paramMap.subscribe((id)=>{
      
      this.CartId=id.get('id')
    })
  }

  shippingAddress=new FormGroup(
    {
      details:new FormControl(null,[Validators.minLength(3),Validators.required]),
      phone:new FormControl(null,[Validators.pattern(/^(011|012|015|010)[0-9]{8}$/),Validators.required]),
      city:new FormControl(null,[Validators.required])
    }
  )
  Checkout(){
   
    if(this.shippingAddress.valid){
      this.loading=true
     this._CartService.OnlinePayment(this.shippingAddress.value,this.CartId).subscribe(
      {
        next:(Response)=>{
          this.loading=false
          // window.location.href=Response.session.url
          window.open(Response.session.url)
        }
      }
     )
    }
  }
}
