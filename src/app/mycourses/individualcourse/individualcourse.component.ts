import {Component, OnInit, Injectable} from '@angular/core';
import {MycoursesService} from "../mycourses.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {CommonService} from "../../common.service";

@Component({
    selector: 'app-individualcourse',
    templateUrl: 'individualcourse.component.html',
    styleUrls: ['individualcourse.component.css']
})

@Injectable()
export class IndividualCourseComponent implements OnInit {
    courseDetails;
    enrollRes;
    isEnrolled=false;
    accountId:string;
    subscription:{
        guProfileId:string,
        guCourseId: string,
        moduleCount: 0,
        desc: string
    }

    constructor(private courses: MycoursesService, private aroute: ActivatedRoute,private toastr:ToastsManager,private common:CommonService) {
        let courseId = this.aroute.snapshot.params['course'];
        if(courseId != undefined){
            // let course = this.courses.getCourseDet(courseId);
            // if(course.status){
            //     this.courseDetails = course.data;
            // }else{
            //     this.courseDetails = null;
            // }
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

    enrollCourse(){
        this.accountId=this.common.readCookieData("uid");
        debugger;
        if(this.accountId!=undefined && this.accountId!=""){
            this.mapSubscriptionData(this.courseDetails);
            this.courses.subscribeCourse(this.subscription).subscribe(data=>{
                this.enrollRes=data.json();
                if(this.enrollRes.error=="00000"){
                this.showSuccess("Course has been successfully enrolled!");
                this.isEnrolled=true;
                }
                else{
                this.showError("Error while enrolling course!");
                }
            });
        }
        else{
            this.showError("Please sign in to enroll");
        }
    }

    mapSubscriptionData(subscriptionData){
        this.subscription={
            guProfileId:this.accountId,
            guCourseId:subscriptionData.guCourseId,
            moduleCount:0,
            desc:''
        }
        // this.subscription.guProfileId=this.accountId;
        // this.subscription.guCourseId=subscriptionData.guCourseId;
    }

    showSuccess(message) {
        this.toastr.success(message, 'Success!',{toastLife: 5000, showCloseButton: false});
    }
    
    showError(message) {
        this.toastr.error(message, 'Oops!',{toastLife: 5000, showCloseButton: true});
    }

    showWarning(message) {
        this.toastr.warning(message, 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }

}
