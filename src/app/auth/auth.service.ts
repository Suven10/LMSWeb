import {Injectable} from "@angular/core";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AuthService {
    // http:Http;
    http: Http;
    constructor(http:Http){
        this.http=http;
    }

    private signUpUser (authDetails): Observable<Response> {
        // API call for user Sign Up goes here
        //...
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8012/Ascentic/API/src/Ascentic.ProfileAPI/profile', JSON.stringify(authDetails),options);
    }

    private signInUser (authDetails) {
        // API call for user Sign Up goes here
        //...
        return {
            status: true,
            userName: authDetails.email
        };
    }

    signUp (userobj):Observable<Response> {
        let signUpRes=this.signUpUser(userobj);
        return signUpRes;
    }

    signIn (userobj) {
        return this.signInUser(userobj);
    }
}