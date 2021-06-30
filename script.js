function Time() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  var period = "";

  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  hour = update(hour);
  minutes = update(minutes);
  second = update(second);

  document.getElementById("digital-hour").innerText = hour + " : "; //+ minutes + " : " + second + " " + period;
  document.getElementById("digital-minutes").innerText = minutes + " : ";
  document.getElementById("digital-second").innerText = second + " "; // + period;
  document.getElementById("digital-period").innerText = period;
  setTimeout(Time, 1000);
}
function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
Time();
