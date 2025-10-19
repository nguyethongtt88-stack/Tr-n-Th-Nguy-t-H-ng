
import React, { useMemo } from 'react';
import type { Quiz, AnswerSheet } from '../types';

interface QuizViewProps {
  quiz: Quiz;
  answers: AnswerSheet;
  onAnswerChange: (id: string, value: string) => void;
}

const countWords = (text: string) => {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
};

const SectionHeader: React.FC<{ title: string; points: string }> = ({ title, points }) => (
    <div className="flex justify-between items-baseline border-b-2 border-indigo-200 pb-2 mb-4">
        <h2 className="text-xl font-bold text-indigo-800 uppercase tracking-wider">{title}</h2>
        <span className="text-sm font-semibold text-indigo-600">{points}</span>
    </div>
);

const Question: React.FC<{
  id: string;
  label: string;
  prompt: string;
  points?: string;
  value: string;
  onChange: (id: string, value: string) => void;
  rows?: number;
  wordCount?: number;
}> = ({ id, label, prompt, points, value, onChange, rows = 4, wordCount }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-md font-semibold text-gray-800 mb-2">
            {label}
            {points && <span className="font-normal text-gray-500"> ({points})</span>}:
            <span className="font-normal block mt-1 text-gray-700">{prompt}</span>
        </label>
        <div className="relative">
            <textarea
                id={id}
                rows={rows}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
            />
            {wordCount !== undefined && (
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {wordCount} / 150 chữ
                </div>
            )}
        </div>
    </div>
);


const QuizView: React.FC<QuizViewProps> = ({ quiz, answers, onAnswerChange }) => {

    const paragraphWordCount = useMemo(() => countWords(answers['paragraph'] || ''), [answers]);

    return (
        <div>
            {/* Part 1: Reading Comprehension */}
            <section>
                <SectionHeader title="I. Đọc hiểu" points="4.0 điểm" />
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <blockquote className="whitespace-pre-wrap text-gray-700 italic border-l-4 border-gray-300 pl-4">
                        {quiz.readingText}
                    </blockquote>
                    <p className="text-right text-sm text-gray-600 mt-4 pr-4">
                        <em>(Nguồn: {quiz.readingSource})</em>
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Thực hiện các yêu cầu:</h3>
                    {quiz.readingQuestions.map((q, index) => (
                        <Question
                            key={`rc-${index}`}
                            id={`rc-${index}`}
                            label={`Câu ${index + 1}`}
                            points={`${q.points.toFixed(1)} điểm`}
                            prompt={q.question}
                            value={answers[`rc-${index}`] || ''}
                            onChange={onAnswerChange}
                        />
                    ))}
                </div>
            </section>

            {/* Part 2: Writing */}
            <section className="mt-10">
                <SectionHeader title="II. Làm văn" points="6.0 điểm" />
                <Question
                    id="paragraph"
                    label="Câu 1"
                    points="2.0 điểm"
                    prompt={quiz.paragraphPrompt}
                    value={answers['paragraph'] || ''}
                    onChange={onAnswerChange}
                    rows={8}
                    wordCount={paragraphWordCount}
                />
                <Question
                    id="essay"
                    label="Câu 2"
                    points="4.0 điểm"
                    prompt={quiz.essayPrompt}
                    value={answers['essay'] || ''}
                    onChange={onAnswerChange}
                    rows={15}
                />
            </section>
        </div>
    );
};

export default QuizView;
