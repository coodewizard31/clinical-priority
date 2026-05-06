// 1. Calendar Array
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
// 2. Main Logic - Runs whenever a page loads the process below is initiated 
window.onload = function () {
    // CHECK IF WE ARE ON THE BOOKING PAGE
    const params = new URLSearchParams(window.location.search);
    const department = params.get('dept');

if (department) {
    handleBookingPage(department);
}

// CHECK IF WE ARE ON THE HOME PAGE
if (document.querySelector('.number')) {
    updateHomeDisplay();
}
};
// Logic for the Booking/Landing Page
function handleBookingPage(dept) {
  const titleArea = document.getElementById("dept-title");
  const imageArea = document.getElementById("image-landing");
  const ticketMessage = document.querySelector(".card p");

  // Handle the Queue Counter (1-400)
  let currentTicket = localStorage.getItem("globalQueue") || 0;
  currentTicket = parseInt(currentTicket) + 1;
  if (currentTicket > 400) currentTicket = 1;

  localStorage.setItem("globalQueue", currentTicket);
  localStorage.setItem("lastDept", dept);
  // Update UI
  const formattedTicket = currentTicket.toString().padStart(3, "0");
  if (ticketMessage) {
    ticketMessage.innerText = `Your digital ticket #${formattedTicket} has been activated. Please proceed to the area shown above.`;
  }

  if (dept === "xray") {
    titleArea.innerText = "Radiology & X-Ray Unit";
    imageArea.innerHTML = '<img src="xray.jpg" class="dept-img">';
  } else if (dept === "dental") {
    titleArea.innerText = "Dental Care Wing";
    imageArea.innerHTML = '<img src="dental.jpg" class="dept-img">';
  } else if (dept === "mri") {
    titleArea.innerText = "MRI Scanning Suite";
    imageArea.innerHTML = '<img src="mri.jpg" class="dept-img">';
  }
}

// Logic for the Home Page Display
function updateHomeDisplay() {
  const ticketNum = localStorage.getItem("globalQueue");
  const dept = localStorage.getItem("lastDept");
  const homeNumber = document.querySelector(".number");
  const homeStatus = document.querySelector(".ticket-status");
// strict matching
  if (ticketNum && homeNumber) {
    homeNumber.innerText = "#" + ticketNum.toString().padStart(3, "0");

    // Match department colors/text
    if (dept === "xray") {
      homeStatus.innerText = "Section: X-Ray";
      homeStatus.style.color = "#e67e22";
    } else if (dept === "dental") {
      homeStatus.innerText = "Section: Dental";
      homeStatus.style.color = "#3498db";
    } else if (dept === "mri") {
      homeStatus.innerText = "Section: MRI";
      homeStatus.style.color = "#9b59b6";
    }
  }
}