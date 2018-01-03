import {Injectable} from "@angular/core";
import {Http,Request,Response,Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class CommonService {
    http:Http;

    constructor(http:Http){
        this.http=http;
    }

    

    private uploadFiles (event):Observable<Response> {
        debugger;
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            //formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            /** No need to include Content-Type in Angular 4 */
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            return this.http.post('http://localhost:8012/Ascentic/API/src/Ascentic.CourseAPI/upload/'+file.name+'/Courses', file, options);
        }
    }

    

      uploadFileData (event) :Observable<Response> {
        return this.uploadFiles(event);
    }

}