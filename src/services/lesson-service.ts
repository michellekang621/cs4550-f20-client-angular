import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (moduleId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/modules/${moduleId}/lessons`)
      .then(response => response.json())

  createLessonForModule = (module) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/modules/${module._id}/lessons`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Lesson'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
