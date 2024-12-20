export const getIndianTimestamp = (): string => {
  return new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long'
  });
};