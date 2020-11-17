import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (course) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/courses/${course._id}/modules`)
      .then(response => response.json())

  createModuleForCourse = (course) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/courses/${course._id}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteModule = (module) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001418910/modules/${module._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
