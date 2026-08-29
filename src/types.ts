export interface StudentData {
  // General Info
  fullName: string;
  isOrphan: string;
  country: string;
  region: string | null;
  district: string | null;
  address: string;
  ethnicity: string;
  
  // Account / Personal Info
  login?: string;
  gender: string;
  passwordMasked?: string;
  birthDate: string;
  age: number | string;
  phone: string;
  passportNumber: string | null;
  enteredScore?: string;
  
  // Educational Info
  faculty: string;
  course: string;
  specialty: string;
  group: string;
  degreeLevel: string;
  studyForm: string;
  studyType: string;

  // Photo
  photoUrl: string;
}
