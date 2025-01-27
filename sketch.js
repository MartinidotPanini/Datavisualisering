let urlAPI =
  "https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2024"; //definere URL til en holiday API

let todayDate;
let skyderM;
let skyderD;

function setup() {
  createCanvas(400, 400);
  background(220);
  //funktion kalder loadJSON() med URL + call-back til printData. data fra API'et bliver argument til funktion printData()
  skyderM = createSelect();
  skyderM.position(200, 100);
  skyderM.option("Januar");
  skyderM.option("Feburar");
  skyderM.option("Marts");
  skyderM.option("April");
  skyderM.option("Maj");
  skyderM.option("juni");
  skyderM.option("Juli");
  skyderM.option("august");
  skyderM.option("september");
  skyderM.option("oktober");
  skyderM.option("november");
  skyderM.option("December");

  skyderD = createSelect();
  skyderD.position(100, 100);

  for (let i = 1; i <= 31; i++) {
    skyderD.option([i]);
  }

  let btn = createButton("Resultat"); //knap til sten
  btn.mousePressed(() => loadJSON(urlAPI, printData));
  btn.position(260, 220);
  
  
  let btn1 = createButton("Restart"); //knap til restart
  btn1.mousePressed(() => restart());
  btn1.position(160, 220);
}

function printData(holidaysData) {
  todayDate = new Date(2024 + skyderM.value() + skyderD.value());
  console.log(todayDate);
  fill("black");
  textSize(12);
  text(todayDate,10,200);
  let holidays = holidaysData.holidays; //listen af Holidays

  let nextHoliday = null; //sættet til null

  //laver forløkke som går gennem alle holidays. holidayDato er Date-objekt. hvis holiday er efter todayDate, bliver den nextHoliday og løkkes break.
  for (let i = 0; i < holidays.length; i++) {
    let holidayDato = new Date(holidays[i].date);
    if (holidayDato > todayDate) {
      nextHoliday = holidays[i];
      break;
    }
  }

  if (nextHoliday) {
    //tjekker om nextHoliday ikke = null, hvis fremtidig Holiday(fra løkke) forsætter kode.
    console.log("Næste Holiday:" + nextHoliday.name + "på", nextHoliday.date);
    fill("black");
  textSize(12);
  text("Næste Holiday:" + nextHoliday.name + "på" + nextHoliday.date,10,100);

    let holidayDato = new Date(nextHoliday.date);
    let holidayTimestamp = holidayDato;
    console.log("Holiday Tid:", holidayTimestamp);

    let daysUntilHoliday = Math.floor(
      (holidayTimestamp - todayDate) / (1000 * 60 * 60 * 24)
    ); //finder antal dage til næste Holiday
    console.log("Dage Indtil næst Holiday:", daysUntilHoliday);
  } else {
    console.log("Ingen fremtidige Holiday.");
  }
}

function restart(){
  background(220);
}

