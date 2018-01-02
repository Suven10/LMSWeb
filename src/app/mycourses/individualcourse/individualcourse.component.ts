import {Component, OnInit, Injectable} from '@angular/core';
import {MycoursesService} from "../mycourses.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-individualcourse',
    templateUrl: 'individualcourse.component.html',
    styleUrls: ['individualcourse.component.css']
})

@Injectable()
export class IndividualCourseComponent implements OnInit {
    courseDetails;

    constructor(private courses: MycoursesService, private aroute: ActivatedRoute) {
        let courseId = this.aroute.snapshot.params['course'];
        //debugger;
        if(courseId != undefined){
            this.courses.getCourseDet(courseId).subscribe(data=>{
                let course = data.json();
                this.courseDetails = course[0];
                // if(course.status){
                //     this.courseDetails = course.data;
                // }else{
                //     this.courseDetails = null;
                // }
            });
        }
    }

    ngOnInit() {}

}
