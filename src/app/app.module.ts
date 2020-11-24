import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import {LessonService} from '../services/lesson-service';
import { CourseTableComponent } from './course-table/course-table.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {QuizzesServiceClient} from '../services/quiz-service';
import {QuestionsServiceClient} from '../services/question-service';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseTableComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseViewerComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizzesServiceClient,
    QuestionsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
