import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonService} from "../../common.service";
import {MycoursesService} from "../mycourses.service";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TopnavComponent } from '../../topnav/topnav.component';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[TopnavComponent]
})
export class CourseComponent implements OnInit {
  isNewCourse=true;
  isNewCategory=true;
  isValidFormSubmitted=false;
  categoryRes;
  course = {
    code   : '',
    name   : '',
    guCatId   : '',
    type    : '',
    noOfModules:0,
    subModules:[],
    filePath:'',
    desc:''
  }

  category = {
    code   : '',
    name   : '',
    desc    : ''
  }

  constructor(private commonService:CommonService, private aroute: ActivatedRoute,private mycourse:MycoursesService,private toastr:ToastsManager,private topnav:TopnavComponent) {

  }

  ngOnInit() {
    let courseParams = this.aroute.snapshot.params;
    this.isNewCourse=(courseParams.isNewCourse=="true")?true:false;
    this.isNewCategory=(courseParams.isNewCategory=="true")?true:false;
  }
  

  createCourse(form: NgForm) {
    //debugger;
     this.isValidFormSubmitted = false;
     if(form.invalid){
        return;	
     }
  }

  createCategory(form: NgForm) {
    //debugger;
     this.isValidFormSubmitted = false;
     if(form.invalid){
        return;	
     }
     this.mycourse.createCategory(this.category).subscribe(data=>
      {
        this.categoryRes=data.json();
        if(this.categoryRes.error=="00000"){
          this.showSuccess("Category created successfully!");
          form.reset();
          this.isValidFormSubmitted=true;
          this.topnav.reloadCategories();
        }
        else{
          this.showError("Error while adding category!");
          //form.reset();
        }
      });
  }

  uploadFiles(event) {
  //debugger;
   this.commonService.uploadFileData(event).subscribe(data=>{
      let res=data.json();
   }); 
  }

  resetCategory(){
    this.category = {
      code   : '',
      name   : '',
      desc    : ''
    }
  }

  showSuccess(message) {
    this.toastr.success(message, 'Success!',{toastLife: 5000, showCloseButton: false});
  }

  showError(message) {
      this.toastr.error(message, 'Oops!',{toastLife: 5000, showCloseButton: true});
  }

  showWarning() {
      this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
      this.toastr.info('Just some information for you.');
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
