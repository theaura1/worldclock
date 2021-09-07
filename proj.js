registerSW();
function action1() {
  var interval_id = window.setInterval(() => {}, 99999);
  for (var i = 0; i < interval_id; i++) window.clearInterval(i);
  clr1 = setInterval(() => {
    document.getElementById("actionn").innerHTML = calcTime("California", "-7");
  }, 1000);
  //myStopFunction(action1);
  //!use id in html as country name and use ifelse for country name and use one action only
}

function action2() {
  var interval_id = window.setInterval(() => {}, 99999);
  for (var i = 0; i < interval_id; i++) window.clearInterval(i);
  clr2 = setInterval(() => {
    document.getElementById("actionn").innerHTML = calcTime("London", "+1");
  }, 1000);
}

function action3() {
  var interval_id = window.setInterval(() => {}, 99999);
  for (var i = 0; i < interval_id; i++) window.clearInterval(i);
  clr3 = setInterval(() => {
    document.getElementById("actionn").innerHTML = calcTime("Italy", "+2");
  }, 1000);
}

function calcTime(city, offset) {
  // create Date object for current location
  d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return "Time in " + city + " is " + nd.toLocaleString();
}

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
