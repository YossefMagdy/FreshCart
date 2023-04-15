import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  apiError:string=""
  loading:boolean=false;
  constructor(private _AuthService:AuthService,private _Router:Router){}
    registerForm:FormGroup=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),
      rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)]), 
    },{validators:this.PasswordMatch});

    PasswordMatch(registerForm:any):null|object{
      let Password=registerForm.get('password');
      let rePassword=registerForm.get('rePassword');
      if(Password.value==rePassword.value){
        return null;
      }
      else{
        rePassword.setErrors({passwordMatch:'password and repassword dont match'})
        return {passwordMatch:'password and repassword dont match'}
      }

    }
    HandleRegister(){
      if(this.registerForm.valid){
        this.loading=true
        this._AuthService.register(this.registerForm.value).subscribe({
          next:(res)=>{
            if(res.message=='success'){
            this._Router.navigate(['/login'])
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
