const daysElement = document.querySelector('.day');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.second');

// Set the target date 10 days from now
const now = new Date();
const targetTime = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);

function updateCountdown() {
    const nowTime = new Date();
    const diff = targetTime - nowTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysElement.innerHTML = d;
    hoursElement.innerHTML = h;
    minutesElement.innerHTML = m;
    secondsElement.innerHTML = s;
}

// Initial call to display the countdown immediately
updateCountdown();
// Update the countdown every second
setInterval(updateCountdown, 1000);
