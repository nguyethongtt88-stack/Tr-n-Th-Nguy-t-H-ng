
import React, { useState, useEffect, useCallback } from 'react';
import { quizzes } from './data/quizData';
import type { Quiz, AnswerSheet } from './types';
import QuizView from './components/QuizView';
import StudentInfo from './components/StudentInfo';

const App: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [answers, setAnswers] = useState<AnswerSheet>({});

  const generateNewQuiz = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quizzes.length);
    const newQuiz = quizzes[randomIndex];
    setCurrentQuiz(newQuiz);
    setAnswers({}); 
  }, []);

  useEffect(() => {
    generateNewQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=800,width=800');
    if (printWindow && currentQuiz) {
      printWindow.document.write('<html><head><title>Bài làm học sinh</title>');
      printWindow.document.write('<style>body { font-family: Arial, sans-serif; line-height: 1.6; } h1, h2, h3 { color: #333; } blockquote { border-left: 4px solid #ccc; padding-left: 1rem; margin-left: 0; font-style: italic; } .question { margin-bottom: 1rem; } .answer { margin-top: 0.5rem; padding: 0.5rem; border: 1px solid #ddd; background-color: #f9f9f9; min-height: 50px; white-space: pre-wrap; } </style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(`<h1>Bài làm môn Ngữ Văn</h1>`);
      printWindow.document.write(`<p><strong>Họ và tên:</strong> ${studentName || 'Chưa nhập'}</p>`);
      printWindow.document.write(`<p><strong>Lớp:</strong> ${studentClass || 'Chưa nhập'}</p>`);
      printWindow.document.write('<hr>');

      printWindow.document.write(`<h2>I. ĐỌC HIỂU</h2>`);
      printWindow.document.write(`<blockquote>${currentQuiz.readingText.replace(/\n/g, '<br/>')}</blockquote>`);
      printWindow.document.write(`<p><em>(Nguồn: ${currentQuiz.readingSource})</em></p>`);
      
      currentQuiz.readingQuestions.forEach((q, index) => {
        printWindow.document.write(`<div class="question">`);
        printWindow.document.write(`<p><strong>Câu ${index + 1}:</strong> ${q.question}</p>`);
        printWindow.document.write(`<div class="answer">${answers[`rc-${index}`] || '<em>Chưa trả lời</em>'}</div>`);
        printWindow.document.write(`</div>`);
      });

      printWindow.document.write(`<h2>II. LÀM VĂN</h2>`);
      printWindow.document.write(`<div class="question">`);
      printWindow.document.write(`<p><strong>Câu 1 (2.0 điểm):</strong> ${currentQuiz.paragraphPrompt}</p>`);
      printWindow.document.write(`<div class="answer">${answers['paragraph'] || '<em>Chưa trả lời</em>'}</div>`);
      printWindow.document.write(`</div>`);

      printWindow.document.write(`<div class="question">`);
      printWindow.document.write(`<p><strong>Câu 2 (4.0 điểm):</strong> ${currentQuiz.essayPrompt}</p>`);
      printWindow.document.write(`<div class="answer">${answers['essay'] || '<em>Chưa trả lời</em>'}</div>`);
      printWindow.document.write(`</div>`);
      
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 tracking-tight">Ôn Tập Ngữ Văn 9</h1>
          <p className="text-lg text-gray-600 mt-2">Sách Chân Trời Sáng Tạo</p>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b pb-6">
             <StudentInfo
                studentName={studentName}
                setStudentName={setStudentName}
                studentClass={studentClass}
                setStudentClass={setStudentClass}
              />
          </div>

          {currentQuiz ? (
            <QuizView 
              quiz={currentQuiz} 
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Đang tải đề thi...</p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={generateNewQuiz}
              className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105 duration-200"
            >
              Tạo đề mới
            </button>
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-200"
            >
              In bài làm
            </button>
          </div>
        </main>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Phát triển bởi AI - Tối ưu cho việc học tập</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
