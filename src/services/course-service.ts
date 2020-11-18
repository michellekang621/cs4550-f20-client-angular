import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  fetchAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001418910/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/courses/${courseId}`)
      .then(response => response.json())

  createCourse = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001418910/courses', {
      method: 'POST',
      body: JSON.stringify({title: 'New Course'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateCourse = (course: { _id: any; }) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteCourse = (course: { _id: any; }) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/courses/${course._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
