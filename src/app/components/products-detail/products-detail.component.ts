import { CartService } from 'src/app/cart.service';
import { products } from './../../InterFace/products';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  loading:boolean=false
  Dready:boolean=false
 id!:string
 productDetail:any
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService,private _CartService:CartService){}
  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe((param:any)=>{
      this.id=param.get('id')
    })
    this._ProductsService.getproductDetails(this.id).subscribe({
      next:(res)=>{
        this.productDetail=res.data
        this.Dready=true
      }
    })
  }
  AddtoCart(){
    this._CartService.AddtoCart(this.id).subscribe({
       next:(Response)=>[
        this._CartService.numOfCartItems.next(Response.numOfCartItems)
       ]
    })
  }
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}