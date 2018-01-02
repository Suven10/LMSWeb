import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import {MycoursesService} from "./mycourses.service";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

    allCourses;
    enrolledCourses;

    constructor(private mycourses: MycoursesService, private router: Router) { }

    ngOnInit() {
        // this.home.myCourses(null).subscribe(data => {
        //     this.dashCounts = data
        // });

        this.allCourses = this.mycourses.allCourses();
        this.enrolledCourses = this.mycourses.myCourses(null);
    }

    openCourse(courseId) {
        this.router.navigate(['/courses/'+courseId, {id:courseId}]);
    }

}
