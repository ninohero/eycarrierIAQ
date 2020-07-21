import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionKnowledgecheckComponent } from './question-knowledgecheck.component';

describe('QuestionKnowledgecheckComponent', () => {
  let component: QuestionKnowledgecheckComponent;
  let fixture: ComponentFixture<QuestionKnowledgecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionKnowledgecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionKnowledgecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
