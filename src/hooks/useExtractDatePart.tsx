export const useExtractDatePart = (dateSTR: string) => {
  const date = new Date(dateSTR);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return {
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
    day: date.getDay()
  };
};
