import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  courses = [];
  courseId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }
    });

    this.courseService.fetchAllCourses()
      .then(courses => this.courses = courses);
  }

}
