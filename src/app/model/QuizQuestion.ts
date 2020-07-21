export interface QuizQuestion {
    questionId: number;
    questionHeading: string;
    questionContent: string;
    questionType: string;
    questionTemplate:string;
    questionAnswers: Array<Object>;
    selectedAnswers:string;
  }
  