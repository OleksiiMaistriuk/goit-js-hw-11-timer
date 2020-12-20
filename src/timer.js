const template = () => `<div class="field">
      <span class="value" data-value="days">11</span>
      <span class="label">Days</span>
    </div>

    <div class="field">
      <span class="value" data-value="hours">11</span>
      <span class="label">Hours</span>
    </div>

    <div class="field">
      <span class="value" data-value="mins">11</span>
      <span class="label">Minutes</span>
    </div>

    <div class="field">
      <span class="value" data-value="secs">11</span>
      <span class="label">Seconds</span>
    </div>`;

class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
    this.container.insertAdjacentHTML('beforeend', template());
  }
  start() {
    updateTimer(0);
    setInterval(() => {
      updateTimer(this.targetDate - Date.now());
    }, 1000);
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2100'),
});
const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

timer.start();

function updateTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

export default CountdownTimer;
