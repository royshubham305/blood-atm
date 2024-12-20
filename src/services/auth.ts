import { AdminCredentials } from '../types/admin';

const ADMIN_CREDENTIALS = {
  username: 'royshubham',
  password: 'bloodatm192'
};

export const authenticateAdmin = (credentials: AdminCredentials): boolean => {
  return (
    credentials.username === ADMIN_CREDENTIALS.username &&
    credentials.password === ADMIN_CREDENTIALS.password
  );
};