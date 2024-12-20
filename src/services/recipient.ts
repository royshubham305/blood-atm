import { ref, push } from 'firebase/database';
import { database } from '../lib/firebase';
import { RecipientData } from '../types/blood';
import { getIndianTimestamp } from '../utils/date';
import { getIpAddress } from '../utils/ip';

export const submitRecipientData = async (data: RecipientData): Promise<void> => {
  try {
    const timestamp = getIndianTimestamp();
    const ip = await getIpAddress();
    
    await push(ref(database, 'requests'), {
      ...data,
      timestamp,
      status: 'pending',
      ip
    });
  } catch (error) {
    console.error('Error submitting recipient data:', error);
    throw error;
  }
};