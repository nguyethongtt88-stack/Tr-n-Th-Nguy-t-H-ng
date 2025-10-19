
export interface ReadingComprehensionQuestion {
  question: string;
  points: number;
}

export interface Quiz {
  id: number;
  title: string;
  readingText: string;
  readingSource: string;
  readingQuestions: ReadingComprehensionQuestion[];
  paragraphPrompt: string; // 2 points
  essayPrompt: string; // 4 points
}

export type AnswerSheet = Record<string, string>;
