import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
      .then(response => response.json())
  findAllQuizAttempts = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
  updateQuestion = (qid, questionId) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions/${questionId}`)
      .then(response => response.json())
}
