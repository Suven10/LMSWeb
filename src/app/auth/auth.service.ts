import {Injectable} from "@angular/core";

@Injectable()

export class AuthService {
    constructor(){}

    private signUpUser (authDetails) {
        // API call for user user Sign Up goes here
        //...
        return {
            status: true,
            userName: authDetails.email
        };
    }

    private signInUser (authDetails) {
        // API call for user user Sign Up goes here
        //...
        return {
            status: true,
            userName: authDetails.email
        };
    }

    signUp (userobj) {
        return this.signUpUser(userobj);
    }

    signIn (userobj) {
        return this.signInUser(userobj);
    }
}