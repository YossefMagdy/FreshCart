import { Category } from './../../InterFace/category';
import { ProductsService } from 'src/app/products.service';
import { products } from './../../InterFace/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getspec-categ',
  templateUrl: './getspec-categ.component.html',
  styleUrls: ['./getspec-categ.component.css']
})
export class GetspecCategComponent implements OnInit {
  SpecCatgid!:string|null
  Data!:Category
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){
    _ActivatedRoute.paramMap.subscribe({
      next:(m)=>{
        this.SpecCatgid=m.get('id')
      }
    })
  }
  ngOnInit(): void {
  this._ProductsService.getSpecCategories(this.SpecCatgid).subscribe({
    next:(res)=>{
      this.Data=res.data
    }
  })
  }
}
