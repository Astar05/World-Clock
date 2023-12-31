function updateTime() {
  //Italy
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //Vietnam
  let vietnamElement = document.querySelector("#vietnam");
  let vietnamDateElement = vietnamElement.querySelector(".date");
  let vietnamTimeElement = vietnamElement.querySelector(".time");
  let vietnamTime = moment().tz("Asia/Ho_Chi_Minh");
  vietnamDateElement.innerHTML = vietnamTime.format("MMMM Do YYYY");
  vietnamTimeElement.innerHTML = vietnamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //South Korea
  let sKoreaElement = document.querySelector("#south-korea");
  let sKoreaDateElement = sKoreaElement.querySelector(".date");
  let sKoreaTimeElement = sKoreaElement.querySelector(".time");
  let sKoreaTime = moment().tz("Asia/Seoul");
  sKoreaDateElement.innerHTML = sKoreaTime.format("MMMM Do YYYY");
  sKoreaTimeElement.innerHTML = sKoreaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Hong Kong
  let hKElement = document.querySelector("#hongkong");
  let hKDateElement = hKElement.querySelector(".date");
  let hKTimeElement = hKElement.querySelector(".time");
  let hKTime = moment().tz("Asia/Hong_Kong");
  hKDateElement.innerHTML = hKTime.format("MMMM Do YYYY");
  hKTimeElement.innerHTML = hKTime.format("h:mm:ss [<small>]A[</small>]");
}

let updatecityInterval;

function updateCity(event) {
  clearInterval(updatecityInterval);

  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    function updateCityTime() {
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector(".chosen-city");
      citiesElement.innerHTML = `<div class="chosen-city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")} </small></div>
        </div>`;
    }

    updateCityTime();

    updatecityInterval = setInterval(updateCityTime, 1000);
  }
}

function currentCity() {
  let currentTime = moment();
  let currentName = moment.tz.guess();
  let currentCity = currentName.replace("_", " ").split("/")[1];
  let currentElement = document.querySelector(".current-city");
  currentElement.innerHTML = `
    <div class="current-city">
      <div>
        <h2>${currentCity}</h2>
        <div class="date">${currentTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${currentTime.format("h:mm:ss")}
        <small> ${currentTime.format("A")} </small>
      </div>
    </div>
  `;
}

updateTime();
currentCity();
setInterval(updateTime, 1000);
setInterval(currentCity, 1000);

let citiesSelect = document.querySelector("#cities-drop");
citiesSelect.addEventListener("change", updateCity);
