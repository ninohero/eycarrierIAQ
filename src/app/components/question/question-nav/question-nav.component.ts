import { Component, OnInit, Input } from '@angular/core';

import { QuestionType } from 'app/components/question/types'

@Component({
  selector: 'app-question-nav',
  templateUrl: './question-nav.component.html',
  styleUrls: ['./question-nav.component.scss']
})
export class QuestionNavComponent implements OnInit {

  public static type = QuestionType.Nav;

  @Input() questioncontent:any; 

 
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
