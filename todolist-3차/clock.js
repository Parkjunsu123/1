const clock = document.querySelector("h2.clock");

 

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dates = date.getDate();

    clock.innerText = `${year}:${month}:${dates}    ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);