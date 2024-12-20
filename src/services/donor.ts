import { ref, push } from 'firebase/database';
import { database } from '../lib/firebase';
import { DonorData } from '../types/blood';
import { getIndianTimestamp } from '../utils/date';
import { getIpAddress } from '../utils/ip';

export const submitDonorData = async (data: DonorData): Promise<void> => {
  try {
    const timestamp = getIndianTimestamp();
    const ip = await getIpAddress();
    
    await push(ref(database, 'donors'), {
      ...data,
      timestamp,
      status: 'pending',
      ip
    });
  } catch (error) {
    console.error('Error submitting donor data:', error);
    throw error;
  }
};