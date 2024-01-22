// Utility function to get a random integer in a range
export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Utility function to format a date in "YYYY-MM-DD" format
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Utility function to get a random date between two dates
export const getRandomDateBetween = (startDate: Date, endDate: Date) => {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = getRandomInt(startTimestamp, endTimestamp);
  return new Date(randomTimestamp);
};

// Function to get a random generation date
export const getRandomGenerationDate = () => {
  // Assuming a range of 10 years from now
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear() - 10, 0, 1);
  return formatDate(getRandomDateBetween(minDate, currentDate));
};

// Function to get a random expiration date after the generation date
export const getRandomExpDate = (generationDate: Date | string) => {
  const minDate = new Date(generationDate);
  const maxDate = new Date(); // Current date
  return formatDate(getRandomDateBetween(minDate, maxDate));
};

export function getRandomInt_150_1000() {
  // The Math.floor() function returns the largest integer less than or equal to a given number.
  // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1.
  return Math.floor(Math.random() * (1000 - 150 + 1)) + 150;
}

export const randomGenerationDate = getRandomGenerationDate();
export const randomExpDate = getRandomExpDate(randomGenerationDate);
