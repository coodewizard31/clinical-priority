// script.js
console.log("System Check: Script Loaded");

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get the department from the URL (?dept=...)
  const params = new URLSearchParams(window.location.search);
  const dept = params.get("dept");

  console.log("Department detected:", dept);

  // 2. Identify the elements on the page
  // Using '#' because they are IDs
  const titleArea = document.querySelector("#dept-title");
  const imageArea = document.querySelector("#image-landing");

  // Using '.' because this is a Class on index.html
  const homeNumber = document.querySelector(".number");

  // --- BOOKING PAGE LOGIC ---
  if (titleArea && dept) {
    // Queue Logic (1-400)
    let count = localStorage.getItem("globalQueue") || 0;
    count = parseInt(count) + 1;
    if (count > 400) count = 1;

    localStorage.setItem("globalQueue", count);
    localStorage.setItem("lastDept", dept);

    // Update Title
    if (dept === "xray") titleArea.innerText = "Radiology & X-Ray Unit";
    else if (dept === "dental") titleArea.innerText = "Dental Care Wing";
    else if (dept === "mri") titleArea.innerText = "MRI Scanning Suite";

    // Update Image
    if (imageArea) {
      imageArea.innerHTML = `<img src="${dept}.jpg" style="width:100%; border-radius:15px;">`;
    }

    // Update the Ticket Number Paragraph
    // This looks for the FIRST paragraph inside the card
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
    }
  }
});
// trying to apply event listener to my exit-btn
const exitBtn = document.querySelector(".exit-btn");

if (exitBtn) {
  exitBtn.addEventListener("click", (event) => {
    // This stops the button from just being a regular link for a second
    console.log("Patient is leaving the queue...");

    // You could add a 'confirm' popup here
    const confirmed = confirm("Are you sure you want to leave the queue?");
    if (!confirmed) {
      event.preventDefault(); // This stops the link from working if they click 'Cancel'
    }
  });
}