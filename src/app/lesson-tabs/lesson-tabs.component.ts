import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  lessonId = '';
  moduleId = '';
  courseId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private lessonService: LessonService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }

      if (typeof params.moduleId) {
        this.moduleId = params.moduleId;
      }

      if (typeof params.lessonId) {
        this.lessonId = params.lessonId;
      }

      const moduleId = params.moduleId;
      if (typeof moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }
}
