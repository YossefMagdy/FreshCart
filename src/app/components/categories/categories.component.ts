import { Category } from './../../InterFace/category';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Category:Category[]=[]

  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        this.Category=response.data
        console.log(response)
      }
    })
  }

}
