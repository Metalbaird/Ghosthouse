document.addEventListener("DOMContentLoaded", function() {
    // Check if death count exists in sessionStorage
    if (sessionStorage.getItem("deathCount") === null) {
        // If not, initialize it with 0
        sessionStorage.setItem("deathCount", 0);
    }

    // Display the initial death count
    updateDeathCount();

    // Attach click event to "try again" link
    document.getElementById("tryAgainLink").addEventListener("click", function() {
        // Increment death count
        incrementDeathCount();
    });
});

function incrementDeathCount() {
    // Get current death count from sessionStorage
    let deathCount = parseInt(sessionStorage.getItem("deathCount"));

    // Increment death count by 1
    deathCount++;

    // Store updated death count in sessionStorage
    sessionStorage.setItem("deathCount", deathCount);

    // Update displayed death count
    updateDeathCount();
}

function updateDeathCount() {
    // Get death count from sessionStorage
    let deathCount = parseInt(sessionStorage.getItem("deathCount"));

    // Update displayed death count
    document.getElementById("deathCount").innerText = deathCount;
}