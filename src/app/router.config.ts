import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {LoginComponent} from "./login/login.component";
import {AllLessonsComponent} from "./all-lessons/all-lessons.component";
import {CreateLessonComponent} from "./create-lesson/create-lesson.component";
import {CourseDetailResolver} from "./course-detail/course-detail.resolver";
import {BrowserEventExperiments2Component} from './browser-event-experiments2/browser-event-experiments2.component';

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bbb',
    component: BrowserEventExperiments2Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'all-lessons',
    component: AllLessonsComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent,
    resolve: {
      detail: CourseDetailResolver
    }
  },
  {
    path: 'lesson/new',
    component: CreateLessonComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
