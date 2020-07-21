import { Component, OnInit, Input, Output, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { QuizQuestion } from 'src/app/model/QuizQuestion';

import {QuizStoreService } from 'app/services/quiz-store.service';
import { filter , map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'quiz-host',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() answer:any;
  @Output() quizquestion:any;
  
  isDisabled$:Observable<Object>;
  questionData$:Observable<Object>;

  constructor(private _quizStore:QuizStoreService) {
  }

  ngOnInit(): void {
    this.isDisabled$ = this._quizStore.getNavState();

    // question Obs from store
    // subscribe questions at tpl level
    this.questionData$ = this._quizStore.getQuestion();
  }

  nextquestion(){
    this._quizStore.nextQuestion();
  }

  previousquestion(){
    this._quizStore.prevQuestion();
  }

}
