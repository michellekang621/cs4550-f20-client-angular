import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId = '';
  course = {
    title: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }
    });

    this.courseService.findCourseById(this.courseId)
      .then(course => this.course = course);
  }
}
