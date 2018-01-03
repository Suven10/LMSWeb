import { Component, OnInit } from '@angular/core';
import {MycoursesService} from "../mycourses/mycourses.service";
import {Course} from "../mycourses/courses.model";
import {Chapter} from "../mycourses/courses.model";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    allCategories;

    constructor(private courses: MycoursesService, private router: Router) { }

    ngOnInit() {
        // this.allCourses =  this.courses.allCourses();
        this.courses.allCategories().subscribe(data=>{
            this.allCategories = data.json();
        });
    }

    openCourse(categoryId) {
        this.router.navigate(['/categourCourses/'+categoryId, {id:categoryId, type:'categoryCourses'}]);
    }

    reloadCategories(){
        this.courses.allCategories().subscribe(data=>{
            this.allCategories=data.json();
        })
    }

}
