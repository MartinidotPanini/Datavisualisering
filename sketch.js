let time = "http://worldtimeapi.org/api/ip"
let urlAPI = "https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2023"

function setup() {
  loadJSON(time, printDate);
  loadJSON(urlAPI, printData);
}
function printDate(data) {
  let date = data.datetime;
  console.log(date);
}

function printData(holidaysData) {
  console.log(holidaysData.holidays[0]);

  let nextHoliday = holidaysData.holidays[0];
  let date = nextHoliday.date;

}