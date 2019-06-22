import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice } from './quiz.model';
import { QuestionFormComponent } from './question-form/question-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private answers: Answers;
  private quiz: Quiz;
  private currentQuestionIndex: number;
  private showResults=false;

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getJSON('maths').subscribe(data => {

      this.quiz = new Quiz('maths', data);
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    if(this.currentQuestionIndex === this.quiz.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }

  // entered auto
  //title = 'quiz-app';
}
