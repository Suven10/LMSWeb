import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {Profile} from "./auth.model";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isNewUser = false;
    profile=new Profile();
    isAuthSuccess;
    isValidFormSubmitted=false;
    isLoginValid=true;
    authDetails = {
        email   : '',
        password: '',
        confirmPassword:'',
        firstName   : '',
        lastName   : '',
        streetAddress:'',
        city :'',
        country:'',
        postalCode:'',
        type    : '',
        dob:'',
        gender:'',
        ssn:'',
        phone:'',
        isStudent:false,
        isInstructor:false
    };

    constructor(private authUser: AuthService, private router: Router) {
    };

    ngOnInit() {
    }

    switchSignUpIn(){
        this.isNewUser = !this.isNewUser;
    }

    callSignUp(form: NgForm) {
       
        this.mapProfileData(this.authDetails);
        this.isValidFormSubmitted = false;
        if(form.invalid){
           return;	
        }
        this.authUser.signUp(this.profile).subscribe(data=>{
            this.isAuthSuccess=data.json();
            if(this.isAuthSuccess.error=="00000"){
                document.cookie ='uid='+ this.isAuthSuccess.guProfileId;
                this.router.navigate(['/auth',{"isSignUp":true}]);
            }
        });
        
        
    }

    mapProfileData(authDet){
        this.profile.gender=authDet.gender;
        this.profile.dob=authDet.dob;
        this.profile.address=authDet.streetAddress+','+authDet.city+','+authDet.country+','+authDet.postalCode;
        this.profile.email=authDet.email;
        this.profile.firstName=authDet.firstName;
        this.profile.lastName=authDet.lastName;
        this.profile.isInstructor=authDet.isInstructor;
        this.profile.isStudent=authDet.isStudent;
        this.profile.password=authDet.password;
        this.profile.ssn=authDet.ssn;
        this.profile.username=authDet.firstName;
        this.profile.phone=authDet.phone;
    }

    mapLoginData(authDet){
        this.profile.password=authDet.password;
        this.profile.username=authDet.firstName;
    }

    callSignIn(form :NgForm) {
        this.isLoginValid = false;
        if(form.invalid){
           return;	
        }
        this.mapLoginData(this.authDetails);
        this.isAuthSuccess = this.authUser.signIn(this.profile).subscribe(data=>{
            this.isAuthSuccess=data.json();
            if(this.isAuthSuccess.status){
                document.cookie = 'uid='+ this.isAuthSuccess.guProfileId;
                this.router.navigateByUrl('/home');
            }
            else
            {
                return;
            }
        });
    }

    

}
