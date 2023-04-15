import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this._CartService.GetAllOrders().subscribe({
      next:(Response)=>{
        console.log(Response)
      }
    })
  }
  
}
