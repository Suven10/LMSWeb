import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import { MycoursesService } from "../mycourses/mycourses.service";
import { MycoursesComponent } from "../mycourses/mycourses.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    enrolledCourses;
    enrolledRes;
    finishedCoursesCount:number = 0;
    accountId:'';
    constructor(private home: HomeService, private mycoursesService: MycoursesService,private common:CommonService) { }

    ngOnInit() {
        this.accountId=this.common.readCookieData("uid");
        this.enrolledCourses = this.mycoursesService.getEnrolledCourse(this.accountId).subscribe(data=>{
            this.enrolledRes=data.json()[0];
            // debugger;
            if(this.enrolledRes.error=="00000"){
                this.enrolledCourses=this.enrolledRes.CourseDetails;
                this.enrolledCourses.forEach(course => {
                    if(course.noOfModules == this.enrolledRes.coveredModules){
                        this.finishedCoursesCount ++;
                    }
                });
            }
        });
        
    }

}
