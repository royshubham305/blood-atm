export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface DonorData {
  name: string;
  age: string;
  bloodGroup: BloodGroup;
  address: string;
  mobile: string;
}

export interface RecipientData {
  patientName: string;
  age: string;
  bloodGroup: BloodGroup;
  hospitalName: string;
  mobile: string;
}