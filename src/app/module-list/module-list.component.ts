import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId = '';
  courseId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }

      if (typeof params.moduleId) {
        this.moduleId = params.moduleId;
      }

      const courseId = params.courseId;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
    });

  }

}
