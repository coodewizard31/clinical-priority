// script.js
console.log("System Check: Script Loaded");

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get the department from the URL (?dept=...)
  const params = new URLSearchParams(window.location.search);
  const dept = params.get("dept");

  console.log("Department detected:", dept);

  // 2. Identify elements
  const titleArea = document.querySelector("#dept-title");
  const imageArea = document.querySelector("#image-landing");
  const homeNumber = document.querySelector(".number");
  const exitBtn = document.querySelector(".exit-btn"); // Moved inside!

  // --- BOOKING PAGE LOGIC ---
  if (titleArea && dept) {
    let count = localStorage.getItem("globalQueue") || 0;
    count = parseInt(count) + 1;
    if (count > 400) count = 1;

    localStorage.setItem("globalQueue", count);
    localStorage.setItem("lastDept", dept);

    if (dept === "xray") titleArea.innerText = "Radiology & X-Ray Unit";
    else if (dept === "dental") titleArea.innerText = "Dental Care Wing";
    else if (dept === "mri") titleArea.innerText = "MRI Scanning Suite";

    if (imageArea) {
      imageArea.innerHTML = `<img src="${dept}.jpg" style="width:100%; border-radius:15px;">`;
    }
    const ticketP = document.querySelector(".card p");
    if (ticketP) {
      ticketP.innerText =
        "Your digital ticket #" +
        count.toString().padStart(3, "0") +
        " has been activated.";
    }
  }

  // --- HOME PAGE LOGIC ---
  if (homeNumber) {
    const savedNumber = localStorage.getItem("globalQueue");
    if (savedNumber) {
      homeNumber.innerText = "#" + savedNumber.toString().padStart(3, "0");
    } else {
      homeNumber.innerText = "#000"; // Reset display if locker is empty
    }
  }
  // --- EXIT BUTTON LOGIC ---
  if (exitBtn) {
    exitBtn.addEventListener("click", (event) => {
      const confirmed = confirm("Are you sure you want to leave the queue?");

      if (confirmed) {
        console.log("Clearing ticket and leaving...");
        localStorage.removeItem("globalQueue"); // This empties the locker!
        localStorage.removeItem("lastDept");
      } else {
        event.preventDefault(); // Stay on the page if they click 'Cancel'
      }
    });
  }
});
