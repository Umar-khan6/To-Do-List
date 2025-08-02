function updateDateTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

// Update immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);
