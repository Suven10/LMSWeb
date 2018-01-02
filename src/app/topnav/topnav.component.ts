import { Component, OnInit } from '@angular/core';
import {MycoursesService} from "../mycourses/mycourses.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    allCourses;

    constructor(private courses: MycoursesService, private router: Router) { }

    ngOnInit() {
        this.allCourses = this.courses.allCourses();
    }

    openCourse(courseId) {
        this.router.navigate(['/courses/'+courseId, {id:courseId}]);
    }

}
