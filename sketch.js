let urlAPI = "https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2024";

let adjustedDate = new Date("October 27, 2024 08:00:00"); 
function setup() {
  loadJSON(urlAPI, printData);
}

function printData(holidaysData) {
  let holidays = holidaysData.holidays;
  
  let today = adjustedDate 
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

  
    let holidayDate = new Date(nextHoliday.date);
    let holidayTimestamp = holidayDate;
    console.log("Holiday Timestamp:", holidayTimestamp);

    let daysUntilHoliday = Math.floor((holidayTimestamp - today) / (1000 * 60 * 60 * 24));
    console.log("Days Until Next Holiday:", daysUntilHoliday);
  } else {
    console.log("No Future Holidays Found.");
  }
}

