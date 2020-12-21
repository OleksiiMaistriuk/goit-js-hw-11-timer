class CountdownTimer {
  constructor({ targetDate, selector }) {
    const template = `<div class="field">
      <span class="value" data-value="days">00</span>
      <span class="label">Days</span>
    </div>

    <div class="field">
      <span class="value" data-value="hours">00</span>
      <span class="label">Hours</span>
    </div>

    <div class="field">
      <span class="value" data-value="mins">00</span>
      <span class="label">Minutes</span>
    </div>

    <div class="field">
      <span class="value" data-value="secs">00</span>
      <span class="label">Seconds</span>
    </div>`;
    this.container = document.querySelector(selector);
    this.container.insertAdjacentHTML('beforeend', template);

    this.targetDate = targetDate.getTime();

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
    this.start();
  }

  start() {
    setInterval(() => {
      this.updateTimer(this.targetDate - Date.now()), this.render();
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer(time) {
    this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  render() {
    this.refs.days.textContent = `${this.days}`;
    this.refs.hours.textContent = `${this.hours}`;
    this.refs.mins.textContent = `${this.mins}`;
    this.refs.secs.textContent = `${this.secs}`;
  }
}

export default CountdownTimer;
