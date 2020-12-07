import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../services/question-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  quizId = '';
  questions = [];
  attempts = [];

  submitQuiz = () => {
    console.log('QUESTIONS CONTENTS');
    console.log(this.questions);
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result));
  }


  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      console.log(this.quizId);
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => {
          this.questions = qs;
          console.log(qs);
        });
      console.log('QUESTIONS FOR THIS QUIZ');
      console.log(this.questions);
      this.svc.findAllQuizAttempts(this.quizId)
        .then(attempts => this.attempts = attempts);
    });
  }

}
