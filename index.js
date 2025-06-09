const timeElement = document.getElementById("time-element");
const dateElement = document.getElementById("date-element");
const amPmElement = document.getElementById("amPm-element");
const dummyTime = "01";

function updateTime() {
  const now = new Date();
  const originalHours = now.getHours();
  const hours = originalHours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const amPm = originalHours < 12 ? "am" : "pm";
  console.log("hours", hours);
  timeElement.innerText = `${hours}:${minutes}:${seconds}`;
  amPmElement.innerText = amPm;
}

setInterval(() => {
  updateTime();
}, 1000);
