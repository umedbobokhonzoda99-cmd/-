import { useState, useEffect } from 'react';
import { initialStudentData } from './data/defaultStudent';
import { StudentDocument } from './components/StudentDocument';
import { StudentData } from './types';

const STORAGE_KEY = 'student_profile_custom_data_v3';

export default function App() {
  const [studentData, setStudentData] = useState<StudentData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialStudentData, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return initialStudentData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studentData));
    } catch {
      // ignore quota exceeded if large image
    }
  }, [studentData]);

  const handlePhotoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setStudentData((prev) => ({
          ...prev,
          photoUrl: e.target?.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-4 sm:py-8 px-2 sm:px-4">
      <main className="max-w-xl mx-auto">
        <StudentDocument
          data={studentData}
          onDataChange={setStudentData}
          onPhotoUpload={handlePhotoUpload}
        />
      </main>
    </div>
  );
}

