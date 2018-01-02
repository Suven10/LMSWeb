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
    finishedCoursesCount:number = 0;

    constructor(private home: HomeService, private mycoursesService: MycoursesService) { }

    ngOnInit() {
        // this.home.myCourses(null).subscribe(data => {
        //     this.dashCounts = data
        // });

        //Get finished modules
        this.enrolledCourses = this.mycoursesService.myCourses(null);
        this.enrolledCourses.forEach(course => {
            if(course.noOfModules == course.moduleFinished){
                this.finishedCoursesCount ++;
            }
        });
    }

}
