
import React from 'react';

interface StudentInfoProps {
  studentName: string;
  setStudentName: (name: string) => void;
  studentClass: string;
  setStudentClass: (className: string) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ studentName, setStudentName, studentClass, setStudentClass }) => {
  return (
    <>
      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
          Họ và tên học sinh
        </label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Nguyễn Văn A"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />
      </div>
      <div>
        <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700 mb-1">
          Lớp
        </label>
        <input
          type="text"
          id="studentClass"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          placeholder="9A1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />
      </div>
    </>
  );
};

export default StudentInfo;
