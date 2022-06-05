let Today = new Date();

    document.getElementById("time").innerHTML = Today.toLocaleTimeString();
    document.getElementById("date").innerHTML = Today.toLocaleDateString();
    let CurrentDate;

    function start() {
        CurrentDate = setInterval(() => {
            let CurrentTime = new Date();
            document.getElementById("time").innerHTML = CurrentTime.toLocaleTimeString();

        }, 1000);
    }
    function stop() {
        clearInterval(CurrentDate);
    }