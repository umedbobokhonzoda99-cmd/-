import { StudentData } from '../types';
import portraitImg from '../assets/images/student_photo.jpg';

export const initialStudentData: StudentData = {
  // General Info
  fullName: 'Бобохонзода Умедҷон Ҷамолхон',
  isOrphan: 'Ятим нест',
  country: 'Тоҷикистон',
  region: null, // "Маълумот нест"
  district: null, // "Маълумот нест"
  address: 'В.Хатлон ш.Кӯлоб Ҷ.Д.Зираки д.Хоҷаисҳоқ',
  ethnicity: 'Тоҷик',

  // Account / Personal Info
  gender: 'Мард',
  birthDate: '11-02-2004',
  age: 22,
  phone: '988479974',
  passportNumber: null, // "Маълумот нест"

  // Educational Info
  faculty: 'Энергетикӣ',
  course: '3',
  specialty: '1-430101 - Нерӯгоҳҳои барқӣ',
  group: 'Б',
  degreeLevel: 'Бакалавр',
  studyForm: 'Буҷавӣ',
  studyType: 'Рӯзона',

  photoUrl: portraitImg || '/photo.jpg',
};
