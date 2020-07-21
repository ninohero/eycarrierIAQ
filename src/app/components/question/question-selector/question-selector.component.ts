import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { QuestionType } from 'app/components/question/types'

@Component({
  selector: 'app-question-selector',
  templateUrl: './question-selector.component.html',
  styleUrls: ['./question-selector.component.scss']
})
export class QuestionSelectorComponent implements OnInit {

  @Input() questioncontent:any; 

  public static type = QuestionType.Select;
 
  id: any;
  heading: any;
  content: any;
  type: any;
  template:any;
  answers:any;

  constructor() { }

  ngOnInit() {
      this.id = this.questioncontent.questionId;
      this.heading = this.questioncontent.questionHeading;
      this.content = this.questioncontent.questionContent;
      this.type = this.questioncontent.questionType;
      this.template = this.questioncontent.questionTemplate;
      this.answers = this.questioncontent.questionAnswers;
   
  }
}
