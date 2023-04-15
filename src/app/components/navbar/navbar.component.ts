import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  CartItem!:number
  islogin:boolean=false
  constructor(private _AuthService:AuthService,private _CartService:CartService){
    _CartService.numOfCartItems.subscribe(
      {
        next:(x)=>this.CartItem=x
      }
    )
  }
  ngOnInit(): void {
    this._AuthService.UserData.subscribe({
      next:()=>{
        if(this._AuthService.UserData.getValue() !=null){
          this.islogin=true
        }
        else{
          this.islogin=false
        }
      }
    })
  }
  logout(){
    this._AuthService.logout()
  }
  
}
