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
    this.container.insertAdjacentHTML('beforeend', template());

    this.targetDate = targetDate.getTime();

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    // this.updateTimer(5);
    this.start();
  }

  start() {
    setInterval(() => {
      this.updateTimer(this.targetDate - Date.now());
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

export default CountdownTimer;
