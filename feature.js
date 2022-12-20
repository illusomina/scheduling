let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let times = [
  "12:00-1:00PM",
  "1:00-2:00PM",
  "2:00-3:00PM",
  "3:00-4:00PM",
  "4:00-5:00PM",
  "5:00-6:00PM",
  "6:00-7:00PM",
  "7:00-8:00PM",
];
let timeHeads = times.map((time) => time.split("-")[0].split(":")[0]);
let btn = document.getElementById("btn");

let class1Selector = document.getElementById("class1");
let class2Selector = document.getElementById("class2");

let day1aSelector = document.getElementById("day1a");
let day1bSelector = document.getElementById("day1b");

let time1aSelector = document.getElementById("time1a");
let time1bSelector = document.getElementById("time1b");

let day2aSelector = document.getElementById("day2a");
let day2bSelector = document.getElementById("day2b");

let time2aSelector = document.getElementById("time2a");
let time2bSelector = document.getElementById("time2b");

let tablehead = document.getElementById("myScheduleHead");
let tableBody = document.getElementById("myScheduleBody");

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const getTimeResult = (time) =>
  time
    .split("-")[0]
    .split(":")[0]
    .trim()
    .replace(/[pP][mM]/, "");

const getSchedule = () => {
  let days_ = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let day1aIndex = days.indexOf(day1aSelector.value);
  let time1aIndex = timeHeads.indexOf(getTimeResult(time1aSelector.value));

  let day1bIndex = days.indexOf(day1bSelector.value);
  let time1bIndex = timeHeads.indexOf(getTimeResult(time1bSelector.value));

  let day2aIndex = days.indexOf(day2aSelector.value);
  let time2aIndex = timeHeads.indexOf(getTimeResult(time2aSelector.value));

  let day2bIndex = days.indexOf(day2bSelector.value);
  let time2bIndex = timeHeads.indexOf(getTimeResult(time2bSelector.value));

  if (tablehead.childElementCount) {
    removeAllChildNodes(tablehead);
    removeAllChildNodes(tableBody);
  }

  days_.forEach((d) => {
    let ele = document.createElement("th");
    ele.innerHTML = d;
    tablehead.appendChild(ele);
  });

  for (let i = 0; i < timeHeads.length; i++) {
    let row = document.createElement("tr");
    let index = document.createElement("td");
    index.innerHTML = times[i];
    row.appendChild(index);

    for (let j = 0; j < days.length; j++) {
      if (time1aIndex == i && day1aIndex == j) {
        let cell = document.createElement("td");
        cell.innerHTML = class1.value;
        cell.style.backgroundColor = "lightpink";
        row.appendChild(cell);
      } else if (time1bIndex == i && day1bIndex == j) {
        let cell = document.createElement("td");
        cell.innerHTML = class1.value;
        cell.style.backgroundColor = "lightpink";
        row.appendChild(cell);
      } else if (time2aIndex == i && day2aIndex == j) {
        let cell = document.createElement("td");
        cell.innerHTML = class2.value;
        cell.style.backgroundColor = "lightblue";
        row.appendChild(cell);
      } else if (time2bIndex == i && day2bIndex == j) {
        let cell = document.createElement("td");
        cell.innerHTML = class2.value;
        cell.style.backgroundColor = "lightblue";
        row.appendChild(cell);
      } else {
        row.appendChild(document.createElement("td"));
      }
    }
    tableBody.appendChild(row);
  }
};
