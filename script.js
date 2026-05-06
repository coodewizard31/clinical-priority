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