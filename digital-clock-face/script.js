const secondHand = document.querySelector(".secondhand");
const minuteHand = document.querySelector(".minhand");
const hourHand = document.querySelector(".hourhand");
const digitalClockFace = document.querySelector(".time");

function setClockFace() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    const time = `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
    digitalClockFace.innerHTML = time;
}

function pad2(number) {
    return number < 10 ? "0" + number : number;
}

setClockFace();
setInterval(setClockFace, 1000);


const markersContainer = document.querySelector("#markers");

for (let i = 0; i < 60; i++) {
    const marker = document.createElement("div");

    marker.classList.add("marker");

    if (i % 5 === 0) {
        marker.classList.add("hour-marker");
    }

    const angle = (i * 6) * (Math.PI / 180);
    const radius = 50;

    const x = 50 + radius * Math.sin(angle);
    const y = 50 - radius * Math.cos(angle);

    marker.style.left = `${x}%`;
    marker.style.top = `${y}%`;
    marker.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg)`;

    markersContainer.appendChild(marker);
}