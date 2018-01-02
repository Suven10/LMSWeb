import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { AuthService } from "./auth/auth.service";
import {HomeService} from "./home/home.service";
import {HttpModule} from "@angular/http";
import { MycoursesComponent } from './mycourses/mycourses.component';
import {MycoursesService} from "./mycourses/mycourses.service";
import {GroupByPipe} from "./topnav/groupby.pipe";
import { IndividualCourseComponent } from './mycourses/individualcourse/individualcourse.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        TopnavComponent,
        HomeComponent,
        NocontentComponent,
        MycoursesComponent,
        GroupByPipe,
        IndividualCourseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: AuthComponent
            },{
                path: 'home',
                component: HomeComponent
            },{
                path: 'mycourses',
                component: MycoursesComponent
            },{
                path: 'courses/:course',
                component: IndividualCourseComponent
            },{
                path: '**',
                component: NocontentComponent
            }
        ])
    ],
    providers: [
        AuthService,
        HomeService,
        MycoursesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
