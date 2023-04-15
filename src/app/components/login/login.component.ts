import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiError:string=""
  loading:boolean=false;
  constructor(private _AuthService:AuthService,private _Router:Router){}
    LoginForm:FormGroup=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),
    })
    HandleLogin(){
      if(this.LoginForm.valid){
        this.loading=true
        this._AuthService.login(this.LoginForm.value).subscribe({
          next:(res)=>{
            if(res.message=='success'){
              localStorage.setItem('userToken',res.token)
              this._AuthService.decoded()
              console.log(this._AuthService.UserData)
              this._Router.navigate(['/home'])
            }
          },
          error:(error)=>{
            this.loading=false
            this.apiError=error.error.message
            
          }
        })
      }
    }
}
