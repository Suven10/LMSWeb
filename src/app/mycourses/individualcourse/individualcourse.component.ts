import {Component, OnInit, Injectable} from '@angular/core';
import {MycoursesService} from "../mycourses.service";
import {Router, ActivatedRoute} from "@angular/router";

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
        if(courseId != undefined){
            let course = this.courses.getCoures(courseId);
            if(course.status){
                this.courseDetails = course.data;
            }else{
                this.courseDetails = null;
            }
        }
    }

    ngOnInit() {}

}
