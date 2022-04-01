// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");


//When the "Land" button is clicked, the following should happen:


    takeoff.addEventListener("click", function() {
        console.log("first event listener test.");
        flightStatus.innerHTML = "The shuttle has landed!";
        shuttleBackground.style.backgroundColor = "blue";

    });

};

window.addEventListener("load", init);