/** @format */

const btnNavEp = document.querySelector(".btn-city");
const headerEp = document.querySelector(".header");

const btnGameEp = document.querySelector(".btn-game");

btnNavEp.addEventListener("click", function () {
  headerEp.classList.toggle("nav-open");
});

function timeAbu() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Etc/GMT-4",
  });
  document.getElementById("time").innerHTML = time;
}

function timeAddis() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Addis_Ababa",
  });
  document.getElementById("time").innerHTML = time;
}

function timeBerlin() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
  });
  document.getElementById("time").innerHTML = time;
}

function timeNewYork() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  document.getElementById("time").innerHTML = time;
}

function timePerth() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Australia/Perth",
  });
  document.getElementById("time").innerHTML = time;
}

function timeReykjavik() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Atlantic/Reykjavik",
  });
  document.getElementById("time").innerHTML = time;
}

function timeRome() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Rome",
  });
  document.getElementById("time").innerHTML = time;
}

function timeStockholm() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Stockholm",
  });
  document.getElementById("time").innerHTML = time;
}

function timeTokyo() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  document.getElementById("time").innerHTML = time;
}

function timeZagreb() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Zagreb",
  });
  document.getElementById("time").innerHTML = time;
}

//storing user's input into
var cityArray = [];
localStorage.setItem("tag", JSON.stringify(cityArray));

function cityInsert() {
  const cityName = document.getElementById("city");
  const something = cityName.value;

  if (something) {
    var cityArray = JSON.parse(localStorage.getItem("tag"));
    cityArray.push(cityName.value);
    localStorage.setItem("tag", JSON.stringify(cityArray));
    alert("Your answer is submitted");
  } else alert("Don't leave this field empty");
}
