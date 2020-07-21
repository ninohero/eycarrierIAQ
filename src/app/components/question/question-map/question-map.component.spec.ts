import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMapComponent } from './question-map.component';

describe('QuestionMapComponent', () => {
  let component: QuestionMapComponent;
  let fixture: ComponentFixture<QuestionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
