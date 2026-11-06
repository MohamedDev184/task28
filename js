
// SetInterval

let clockInterval = null;

function updateClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;

}

function startClock() {

    if (clockInterval === null) {

        updateClock();

        clockInterval = setInterval(updateClock, 1000);

    }

}

function stopClock() {

    clearInterval(clockInterval);

    clockInterval = null;

}


// SetTimeout

function showWelcome() {

    document.getElementById("message").innerHTML =
        "Please Wait...";

    setTimeout(function() {

        document.getElementById("message").innerHTML =
            "Welcome! Thanks for visiting our website.";

    }, 2000);

}
