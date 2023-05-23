const convertTime = (time) => {
  // Extract hours and minutes from the inputTime
  const [hours, minutes] = time.split(":");

  // Convert hours to a number
  let convertedHours = parseInt(hours);

  // Determine if it's AM or PM based on the hours
  const meridiem = convertedHours >= 12 ? "PM" : "AM";

  // Adjust convertedHours to the 12-hour format
  if (convertedHours === 0) {
    convertedHours = 12; // Special case for midnight (0 hours)
  } else if (convertedHours > 12) {
    convertedHours -= 12;
  }
  return `${convertedHours}:${minutes}${meridiem}`;
};
export default convertTime;
