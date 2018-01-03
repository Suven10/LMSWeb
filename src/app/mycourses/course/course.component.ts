import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonService} from "../../common.service";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isNewCourse=true;
  isValidFormSubmitted=false;
  course = {
    code   : '',
    name   : '',
    guCatId   : '',
    type    : '',
    noOfModules:0,
    subModules:[],
    filePath:''
}

  constructor(private commonService:CommonService) {

  }

  ngOnInit() {
  }

  createCourse(form: NgForm) {
    debugger;
     this.isValidFormSubmitted = false;
     if(form.invalid){
        return;	
     }
     
 }

 uploadFiles(event) {
  //debugger;
   this.commonService.uploadFileData(event).subscribe(data=>{
      let res=data.json();
   }); 
}

//  public uploader:FileUploader = new FileUploader({url: 'http://localhost:8012/Ascentic/Courses/'});
//  public hasBaseDropZoneOver:boolean = false;
//  public hasAnotherDropZoneOver:boolean = false;

//  public fileOverBase(e:any):void {
//    this.hasBaseDropZoneOver = e;
//  }

//  public fileOverAnother(e:any):void {
//    this.hasAnotherDropZoneOver = e;
//  }



}
