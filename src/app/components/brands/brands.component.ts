import { Brand } from './../../InterFace/brand';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

  AllBrand:Brand[]=[]

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getbrands().subscribe(
      {
        next:(Response)=>{
          this.AllBrand=Response.data
          console.log(this.AllBrand)
        }
      }
    )
  }
 
}
