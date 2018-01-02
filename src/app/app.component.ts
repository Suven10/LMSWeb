import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {isNullOrUndefined} from "util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    getCookie (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    };

    constructor(public router: Router){
        let uid = this.getCookie('uid');
        if(!isNullOrUndefined(uid)){
            router.navigateByUrl('/home');
        }
    }
}
