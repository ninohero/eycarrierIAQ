import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';


import { ContainerRefDirective } from 'app/directives/container-ref.directive';

import { QUESTIONS_COMPONENTS_MAP } from 'app/components/question';

import {QuestionType} from './types';

import { findValueByPrefix } from 'app/helpers';

@Component({
  selector: 'question-host',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() public question: any;
  @ViewChild(ContainerRefDirective, {static: true, read: ContainerRefDirective}) entry: ContainerRefDirective;

  componentRef:any;
  component:any;

  title:any;
  buttonContent: any;
  questionId: any;
  questionText: any;
  questionType: any;
  questionTemplate:any;
  selectedOption: any;


  constructor(private _elementRef: ElementRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.setQuestionData(this.question);
  }

  ngOnChanges():void {
    this.setQuestionData(this.question);
  }

  // ngAfterViewInit(): void{
  //   this.setQuestionData(this.question);
  // }


  setQuestionData = (data) => {

    // debugger;
    this.questionTemplate = data.questionTemplate;

    let templateIndex = findValueByPrefix(QuestionType, this.questionTemplate);
    let template = QUESTIONS_COMPONENTS_MAP[templateIndex];


    const factory = this.resolver.resolveComponentFactory(template);
    this.entry.viewContainerRef.clear();


    this.componentRef = this.entry.viewContainerRef.createComponent(factory);
    this.componentRef.instance.questioncontent = data;
  }
}
