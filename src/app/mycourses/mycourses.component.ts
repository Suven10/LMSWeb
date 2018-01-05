import { Component, OnInit,Input } from '@angular/core';
// import { Http, Response } from '@angular/http';
import {MycoursesService} from "./mycourses.service";
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
    @Input() hideCat:boolean;
    allCourses;
    enrolledCourses;
    categoryCourses;
    categories;
    isByCategory=false;
    
    constructor(private mycourses: MycoursesService, private router: Router, private aroute: ActivatedRoute) { }

    ngOnInit() {
        //debugger;
        // this.home.myCourses(null).subscribe(data => {
        //     this.dashCounts = data
        // });

        // this.allCourses = this.mycourses.allCourses();
        // this.enrolledCourses = this.mycourses.myCourses(null);
        this.mycourses.allCategories().subscribe(categoreis => {
            this.categories = categoreis.json();
        });

        let cat = this.aroute.snapshot.params;
        if(cat.type != undefined || cat.type != null){
            if(cat.type == 'categoryCourses'){
                this.isByCategory=true;
                this.hideCat=true;
                //debugger;
                this.mycourses.getCategoryDet(cat.id).subscribe(course =>{
                    this.allCourses = course.json()[0];
                });
            }
            else
            {
                this.mycourses.allCourses().subscribe(course =>{
                    this.allCourses = course.json();
                });;
            }
        }else{
            this.mycourses.allCourses().subscribe(course =>{
                this.allCourses = course.json();
            });;
        }
    }

    openCourse(courseId) {
        this.router.navigate(['/courses/'+courseId, {id:courseId}]);
    }

    createCourse() {
        this.router.navigate(['/course', {isNewCourse:true,isNewCategory:false}]);
    }

    createCategory() {
        this.router.navigate(['/course', {isNewCourse:false,isNewCategory:true}]);
    }

    getCourseDet(category) {
        this.mycourses.getCategoryDet(category).subscribe(courses => {
            this.allCourses = courses.json()[0];
        })
    }

}
