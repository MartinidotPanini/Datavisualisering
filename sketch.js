let urlAPI = "https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2024";

// Set `adjustedDate` to your desired date or `null` to use today's actual date.
let adjustedDate = new Date("September 27, 2024 08:00:00"); // Replace with desired date or set to null

function setup() {
  loadJSON(urlAPI, printData);
}

function printData(holidaysData) {
  let holidays = holidaysData.holidays;
  
  // Use adjusted date if provided, otherwise use the actual current date
  let today = adjustedDate || new Date();
  console.log("Today's Date:", today);

  let nextHoliday = null;

  for (let i = 0; i < holidays.length; i++) {
    let holidayDate = new Date(holidays[i].date);
    if (holidayDate > today) { 
      nextHoliday = holidays[i];
      break;
    }
  }

  if (nextHoliday) {
    console.log("Next Holiday:", nextHoliday.name, "on", nextHoliday.date);

    // Convert the next holiday date to a timestamp
    let holidayDate = new Date(nextHoliday.date);
    let holidayTimestamp = holidayDate.getTime();
    console.log("Holiday Timestamp:", holidayTimestamp);

    // Calculate the number of days until the next holiday
    let daysUntilHoliday = Math.floor((holidayTimestamp - today.getTime()) / (1000 * 60 * 60 * 24));
    console.log("Days Until Next Holiday:", daysUntilHoliday);
  } else {
    console.log("No Future Holidays Found.");
  }
}