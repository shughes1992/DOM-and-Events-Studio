// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    const takeoffButton = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");


//When the "Land" button is clicked, the following should happen:


    takeoffButton.addEventListener("click", function() {
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.") 
        if (isReady) {
        console.log("first event listener test.");
        flightStatus.innerHTML = "Shuttle in flight!";
        shuttleBackground.style.backgroundColor = "blue";
        }
    });

};

window.addEventListener("load", init);