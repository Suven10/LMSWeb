import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isNewUser = false;
    isAuthSuccess;
    authDetails = {
        email   : '',
        password: '',
        fname   : '',
        lname   : '',
        type    : '',
    };

    constructor(private authUser: AuthService, private router: Router) {
    };

    ngOnInit() {
    }

    switchSignUpIn(){
        this.isNewUser = !this.isNewUser;
    }

    callSignUp() {
        this.isAuthSuccess = this.authUser.signUp(this.authDetails);
        if(this.isAuthSuccess.status){
            document.cookie ='uid='+ this.isAuthSuccess.userName;
            this.router.navigateByUrl('/home');
        }
    }

    callSignIn() {
        this.isAuthSuccess = this.authUser.signIn(this.authDetails);
        if(this.isAuthSuccess.status){
            document.cookie = 'uid='+ this.isAuthSuccess.userName;
            this.router.navigateByUrl('/home');
        }
    }

}
