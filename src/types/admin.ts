export interface AdminCredentials {
  username: string;
  password: string;
}

export interface FormSubmission {
  id: string;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
  ip: string;
}

export interface DonorSubmission extends FormSubmission {
  name: string;
  age: string;
  bloodGroup: string;
  address: string;
  mobile: string;
}

export interface RecipientSubmission extends FormSubmission {
  patientName: string;
  age: string;
  bloodGroup: string;
  hospitalName: string;
  mobile: string;
}