import { Component, OnInit } from '@angular/core';
import {MycoursesService} from "../mycourses/mycourses.service";
import {Course} from "../mycourses/courses.model";
import {Chapter} from "../mycourses/courses.model";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    allCourses;

    constructor(private courses: MycoursesService, private router: Router) { }

    ngOnInit() {
        this.courses.allCourses().subscribe(data=>{
            this.allCourses = data.json();
        });
    }

    openCourse(courseId) {
        this.router.navigate(['/courses/'+courseId, {id:courseId}]);
    }

}
