import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/module-service';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];

  selectedCourse = {
    title: ''
  };

  modules = [];

  selectedModule = {
    title: ''
  };

  lessons = [];

  constructor(private courseService: CourseService,
              private moduleService: ModuleService,
              private lessonService: LessonService) {}

  createCourse = () =>
    this.courseService.createCourse()
      .then(actualCourse => this.courses.push(actualCourse))

  createModuleForCourse = (course) =>
    this.moduleService.createModuleForCourse(course)
      .then(actualModule => this.modules.push(actualModule))

  createLessonForModule = (module) =>
    this.lessonService.createLessonForModule(module)
      .then(actualLesson => this.lessons.push(actualLesson))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course)
      .then(status => this.courses = this.courses.filter(c => c !== course))

  deleteModule = (module) =>
    this.moduleService.deleteModule(module)
      .then(status => this.modules = this.modules.filter(m => m !== module))

  selectCourse = (course) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course)
      .then(modules => this.modules = modules);
  }

  selectModule = (module) => {
    this.selectedModule = module;
    this.lessonService.findLessonsForModule(module)
      .then(lessons => this.lessons = lessons);
  }

  editing = (course: { editing: boolean; }) =>
    course.editing = true

  save = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  ngOnInit(): void {
    this.courseService.fetchAllCourses()
      .then(courses => this.courses = courses);
  }

}
