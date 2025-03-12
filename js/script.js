// Handle Adverse Event Form Submission
document.getElementById("adverseEventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let reporterName = document.getElementById("reporter-name").value;
    let reporterEmail = document.getElementById("reporter-email").value;
    let eventDetails = document.getElementById("event-details").value;

    if (reporterName && reporterEmail && eventDetails) {
        document.getElementById("eventMessage").innerText = "Your report has been submitted successfully. Thank you!";
        document.getElementById("eventMessage").style.color = "green";
        this.reset();
    } else {
        document.getElementById("eventMessage").innerText = "Please fill out all fields.";
        document.getElementById("eventMessage").style.color = "red";
    }
});
