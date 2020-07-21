import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContainerRefDirective } from './directives/container-ref.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionSelectorComponent } from './components/question/question-selector/question-selector.component';
import { QuestionMapComponent } from './components/question/question-map/question-map.component';
import { QuestionNavComponent } from './components/question/question-nav/question-nav.component';
import { QuestionKnowledgecheckComponent } from './components/question/question-knowledgecheck/question-knowledgecheck.component';

import { QUESTION_COMPONENTS } from './components/question';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    HomeComponent,
    AboutComponent,
    ContainerRefDirective,
    QuestionSelectorComponent,
    QuestionMapComponent,
    QuestionNavComponent,
    QuestionKnowledgecheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: QUESTION_COMPONENTS,
})
export class AppModule { }
