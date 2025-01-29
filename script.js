function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");
    const now = new Date();
    utcTimeElement.textContent = "UTC Time: " + now.toUTCString();
}

window.onload = updateUTCTime;
setInterval(updateUTCTime, 1000);
