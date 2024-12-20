import { ref, get } from 'firebase/database';
import { database } from '../lib/firebase';
import { DonorSubmission, RecipientSubmission } from '../types/admin';

export const fetchDonors = async (): Promise<DonorSubmission[]> => {
  const donorsRef = ref(database, 'donors');
  const snapshot = await get(donorsRef);
  
  if (!snapshot.exists()) return [];
  
  return Object.entries(snapshot.val()).map(([id, data]) => ({
    id,
    ...(data as any)
  }));
};

export const fetchRequests = async (): Promise<RecipientSubmission[]> => {
  const requestsRef = ref(database, 'requests');
  const snapshot = await get(requestsRef);
  
  if (!snapshot.exists()) return [];
  
  return Object.entries(snapshot.val()).map(([id, data]) => ({
    id,
    ...(data as any)
  }));
};