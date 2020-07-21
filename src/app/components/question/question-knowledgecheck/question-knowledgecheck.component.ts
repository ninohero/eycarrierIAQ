import { Component, OnInit, Input } from '@angular/core';

import { QuestionType } from 'app/components/question/types'


@Component({
  selector: 'app-question-knowledgecheck',
  templateUrl: './question-knowledgecheck.component.html',
  styleUrls: ['./question-knowledgecheck.component.scss']
})
export class QuestionKnowledgecheckComponent implements OnInit {
  @Input() questioncontent:any; 

  public static type = QuestionType.KC;

 
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
