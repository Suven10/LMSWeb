import {Injectable} from "@angular/core";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class MycoursesService {
    http:Http;
    courses = [
        {
            "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "C8697B6C-FAE9-B7CA-9DCD-286B730F3361",
            "code": "Food&Beverage",
            "name": "Food & Beverage",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "type": "Quiz",
            "filePath":"http://localhost:8012/Ascentic/Courses/food&b.json",
            "noOfModules":30,
            "createdDate": "2017-12-28 17:31:43.000",
            "moduleFinished":10,
            "image":"assets/course",
            "subModules": [
                {
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "D8697B6C",
                    "name": "Chapter 1",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 10
                },{
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "286B730F3361",
                    "name": "Chapter 2",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 20
                }
            ]
        }, {
            "guCourseId": "T8597B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "C53BA156-CAD1-815D-30A2-946308F341E2",
            "code": "Travel",
            "name": "Travel",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "type": "Quiz",
            "filePath":"http://localhost:8012/Ascentic/Courses/travel1.json",
            "noOfModules":30,
            "createdDate": "2017-12-28 17:30:50.000",
            "moduleFinished":10,
            "image":"assets/course",
            "subModules": [
                {
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "D8697B6C",
                    "name": "Chapter 1",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 10
                },{
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "286B730F3361",
                    "name": "Chapter 2",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 20
                }
            ]
        }, {
            "guCourseId": "D8427B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "10217916-5C86-52EB-E2F7-DDD5419B7865",
            "code": "EnglishD",
            "name": "English Developement",
            "description": "English developement for kids",
            "type": "Text",
            "filePath":"http://localhost:8012/Ascentic/Courses/englishlesson.txt",
            "noOfModules":1,
            "createdDate": "2017-12-28 17:30:34.000",
            "moduleFinished":10,
            "image":"assets/course",
            "subModules": [
                {
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "D8697B6C",
                    "name": "Chapter 1",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 10
                },{
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "286B730F3361",
                    "name": "Chapter 2",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 20
                }
            ]
        }, {
            "guCourseId": "ER697B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "7C6E65BD-D1DA-FB00-C834-86C7E25B5211",
            "code": "IT",
            "name": "Information Technology",
            "description": "Information Technology",
            "type": "Slide",
            "filePath":"http://localhost:8012/Ascentic/Courses/IT01.ppt",
            "noOfModules":30,
            "createdDate": "2017-12-28 17:19:58.000",
            "moduleFinished":10,
            "image":"assets/course",
            "subModules": [
                {
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "D8697B6C",
                    "name": "Chapter 1",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 10
                },{
                    "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
                    "guSubmoduleId": "286B730F3361",
                    "name": "Chapter 2",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "moduleFinished" : 20
                }
            ]
        }
    ];

    constructor(http:Http){
        this.http=http;
    }

    private getCurrentCourses (uid) {
        // return this.http
        //     .get('http://localhost:4200/src/data/courses.json')
        //     .map((res:Response) => res.json())
        return [{
            "guCourseId": "D8697B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "C8697B6C-FAE9-B7CA-9DCD-286B730F3361",
            "code": "Food&Beverage",
            "name": "Food & Beverage",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "type": "Quiz",
            "filePath":"http://localhost:8012/Ascentic/Courses/food&b.json",
            "noOfModules":30,
            "createdDate": "2017-12-28 17:31:43.000",
            "moduleFinished":10,
            "image":"assets/course"
        }, {
            "guCourseId": "T8597B6C-FAE9-B7CA-9DCD-286B730F3361",
            "guCatId": "C53BA156-CAD1-815D-30A2-946308F341E2",
            "code": "Travel",
            "name": "Travel",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "type": "Quiz",
            "filePath":"http://localhost:8012/Ascentic/Courses/travel1.json",
            "noOfModules":30,
            "createdDate": "2017-12-28 17:30:50.000",
            "moduleFinished":10,
            "image":"assets/course"
        }];
    }

    private getAllCourses ():Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let getAllCourses=this.http.get('http://localhost:8012/Ascentic/API/src/Ascentic.CourseAPI/courses/?skip=0&take=100&order=desc',options);
        return getAllCourses;
    }

    private getCourseDetailsById (id) :Observable<Response>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let getCourseDet=this.http.get('http://localhost:8012/Ascentic/API/src/Ascentic.CourseAPI/course/'+id,options);
        return getCourseDet;
        // for(let i=0;i<this.courses.length;i++){
        //     if(this.courses[i].guCourseId == id){
        //         return {
        //             status: true,
        //             data: this.courses[i]
        //         };
        //     }
        // }
        // return {status: false,data: null}
    }

    myCourses (id) {
        return this.getCurrentCourses(id);
    }

    allCourses () :Observable<Response> {
        return this.getAllCourses();
    }

    getCourseDet(id):Observable<Response> {
        return this.getCourseDetailsById(id);
    }

}