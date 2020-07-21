import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizQuestion } from '../model/QuizQuestion';
import { filter, map } from 'rxjs/operators';

import { of } from 'rxjs';

import Data from '../../assets/json/quizquestions.json';

@Injectable({
  providedIn: 'root'
})
export class QuizStoreService {
  question: object;
  quizQuestions = Data;
  progress = 0;
  quizLength = Data.length;
  
  buttonState = {
    "prev": false,
    "next": true
  }
  constructor() { }
  // replace data with a call to a service that does the same thing
  // bind service call in constructor and data to question prop 
  private readonly _quizData = new BehaviorSubject<QuizQuestion[]>(this.quizQuestions);

  // with Stream i can update Data and then parse when approp
  readonly quizData$ = this._quizData.asObservable();


  // Stream of initial question will get updated by getting above and updateing;
  private readonly _questionData = new BehaviorSubject<QuizQuestion>(this.quizQuestions[this.progress]);

  readonly questionData$ = this._questionData.asObservable();

  private readonly _navState = new BehaviorSubject<Object>(this.buttonState);

  readonly navState$ = this._navState.asObservable();

  public getQuestion() {
    return this.questionData$;
  }

  public nextQuestion() {
    this.progress++;
    this.setQuestion(this.progress);
  }

  public prevQuestion() {
    this.progress--;
    this.setQuestion(this.progress);
  }

  /**
  * Adds a question obj to the source data subject.
  * From the original source Data array of objs
  * @param {number} questionNumber The id of the question to set
 */

  private setQuestion(questionNumber: number) {
    let value = this.quizQuestions.filter(item => item.questionId === questionNumber);

    // test undefinded condition
    this._questionData.next(value[0]);
  }

  public getNavState() {
    return this.navState$;
  }

  public updateNavState(newState) {
    debugger;
    let updatedNavState = {
      "prev": this.isValidIndex(newState),
      "next": this.isValidIndex(newState++),
    }

    this._navState.next(newState);
  }

  

  private loadMockData() {
    // return mock Service Call with a function or Data Above
  }

  private isValidIndex(index: number) {
    const arrLength = this.quizLength;
    let isValid: boolean;

    if (index < 0) isValid = false;

    isValid = index > arrLength ? false : true;

    return isValid;

  }
}
