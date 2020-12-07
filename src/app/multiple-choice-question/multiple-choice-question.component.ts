import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

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
//   question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };

//   // faCheck = faCheck;
//   // faTimes = faTimes;

  grade = () =>
    this.grading = true

  selectChoice = (choice) =>
    this.selectedAnswer = choice

  constructor() { }

  ngOnInit(): void {
  }

}
