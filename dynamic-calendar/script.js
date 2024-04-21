const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  const firstDayofMonth = new Date(currentYear, currentMonth).getDay();
  const lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const lastDayofMonth = new Date(
    currentYear,
    currentMonth,
    lastDateofMonth
  ).getDay();
  const lastDateofPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofPrevMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  days.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
