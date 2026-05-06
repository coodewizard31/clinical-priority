
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

window.onload = function() {
    // --- PART A: Logic for BOOKING.HTML ---
    const params = new URLSearchParams(window.location.search);
    const dept = params.get('dept');

    if (dept) {
        // Find elements on booking.html
        const titleArea = document.getElementById('dept-title');
        const imageArea = document.getElementById('image-landing');
        const ticketText = document.querySelector('.card p');

        // Only run if we are actually on the booking page
        if (titleArea) {
            // Update the Queue (1-400)
            let currentNumber = localStorage.getItem('globalQueue') || 0;
            currentNumber = parseInt(currentNumber) + 1;
            
            if (currentNumber > 400) currentNumber = 1; // Reset loop

            localStorage.setItem('globalQueue', currentNumber);
            localStorage.setItem('lastDept', dept);

            // Control Flow (If/Else) for Departments
            if (dept === 'xray') {
                titleArea.innerText = "Radiology & X-Ray Unit";
                if(imageArea) imageArea.innerHTML = '<img src="xray.jpg" style="width:100%; border-radius:15px;">';
            } else if (dept === 'dental') {
                titleArea.innerText = "Dental Care Wing";
                if(imageArea) imageArea.innerHTML = '<img src="dental.jpg" style="width:100%; border-radius:15px;">';
            } else if (dept === 'mri') {
                titleArea.innerText = "MRI Scanning Suite";
                if(imageArea) imageArea.innerHTML = '<img src="mri.jpg" style="width:100%; border-radius:15px;">';
            }

            // Update the text to show the new number
            if(ticketText) {
                ticketText.innerText = "Your digital ticket #" + currentNumber.toString().padStart(3, '0') + " has been activated.";
            }
        }
    }

    // --- PART B: Logic for INDEX.HTML (Home) ---
    const homeNumber = document.querySelector('.number');
    const homeStatus = document.querySelector('.ticket-glow-card p');

    if (homeNumber) {
        const savedNumber = localStorage.getItem('globalQueue');
        const savedDept = localStorage.getItem('lastDept');

        if (savedNumber) {
            homeNumber.innerText = "#" + savedNumber.toString().padStart(3, '0');
            
            // Show which department the ticket belongs to
            if (savedDept) {
                homeStatus.innerText = "Current Dept: " + savedDept.toUpperCase();
                homeStatus.style.fontWeight = "bold";
                homeStatus.style.color = "#3498db";
            }
        }
    }
};