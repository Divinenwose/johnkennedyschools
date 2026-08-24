export interface RegistrationFormData {
  student: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    stateOfOrigin: string;
    classApplyingFor: string;
  };
  guardian: {
    fullName: string;
    relationship: string;
    phone: string;
    altPhone: string;
    email: string;
    address: string;
    occupation: string;
  };
  emergencyContact: {
    fullName: string;
    relationship: string;
    phone: string;
    altPhone: string;
  };
  academic: {
    previousSchool: string;
    previousClass: string;
    previousPerformance: string;
    reasonForLeaving: string;
    additionalInfo: string;
  };
  documents: {
    files: File[];
  };
  additional: {
    medicalInfo: string;
    allergies: string;
    specialConsiderations: string;
    otherInfo: string;
  };
  declaration: boolean;
}

export const emptyFormData: RegistrationFormData = {
  student: {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    stateOfOrigin: '',
    classApplyingFor: '',
  },
  guardian: {
    fullName: '',
    relationship: '',
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    occupation: '',
  },
  emergencyContact: {
    fullName: '',
    relationship: '',
    phone: '',
    altPhone: '',
  },
  academic: {
    previousSchool: '',
    previousClass: '',
    previousPerformance: '',
    reasonForLeaving: '',
    additionalInfo: '',
  },
  documents: {
    files: [],
  },
  additional: {
    medicalInfo: '',
    allergies: '',
    specialConsiderations: '',
    otherInfo: '',
  },
  declaration: false,
};

export const STEP_LABELS = [
  'Student',
  'Guardian',
  'Academic',
  'Documents',
  'Additional',
  'Review',
] as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^(\+234\d{10}|0\d{10})$/;

export function isValidPhone(value: string) {
  return PHONE_REGEX.test(value.replace(/[\s-]/g, ''));
}
