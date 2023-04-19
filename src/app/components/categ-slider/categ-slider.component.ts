import { Category } from './../../InterFace/category';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categ-slider',
  templateUrl: './categ-slider.component.html',
  styleUrls: ['./categ-slider.component.css']
})
export class CategSliderComponent implements OnInit {
  category:Category[]=[]
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        this.category=response.data
      
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
}
