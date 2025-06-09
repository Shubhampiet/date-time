const timeElement = document.getElementById("time-element");
const dateElement = document.getElementById("date-element");
const amPmElement = document.getElementById("amPm-element");

function getDate(now) {

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = now.toLocaleDateString("en-US", options);
  dateElement.innerText=formattedDate
}

function updateTime(now) {
    console.log("now", now)
  const originalHours = now.getHours();
  const modifiedHours = originalHours % 12 || 12;
  const hours = modifiedHours.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const amPm = originalHours < 12 ? "am" : "pm";

  timeElement.innerText = `${hours}:${minutes}:${seconds}`;
  amPmElement.innerText = amPm;
}

updateTime(new Date());

setInterval(() => {
  const now = new Date();
  updateTime(now);
  getDate(now);
}, 1000);
