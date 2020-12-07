import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''};
  @Input()
  answer = '';

  grading = false;
  selectedAnswer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  // @Input()
  // question = {_id: '', title: '', question: '', answer: '', correct: ''};

  // faCheck = faCheck; faTimes = faTimes;
  grade = () =>
    this.grading = true


  selectChoice = (choice) =>
    this.selectedAnswer = choice

  constructor() { }

  ngOnInit(): void {
  }

}
