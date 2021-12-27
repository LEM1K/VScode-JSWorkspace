const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    var amPm = 'AM';
    var hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    

    if(hour >= 12) {
        amPm = 'PM';
        hour = hour - 12;
    }

    clock.innerText = `${amPm} ${hour} : ${minute}`;
    
}

getClock();
setInterval(getClock, 1000);
//setTimeout(sayHello, 5000);
