import './sass/main.scss';

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(`${targetDate}`);
    this.refs = {
      days: document.querySelector(`#${selector} span[data-value = days]`),
      hours: document.querySelector(`#${selector} span[data-value = hours]`),
      mins: document.querySelector(`#${selector} span[data-value = mins]`),
      secs: document.querySelector(`#${selector} span[data-value = secs]`),
    };
  };

  calculateWaitingTime() {
    const time = this.targetDate - new Date();

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
  };

  updateClocke({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  };

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
      this.updateClocke(this.calculateWaitingTime());
    setInterval(() => {
      this.updateClocke(this.calculateWaitingTime());
    }, 1000);
  }
};

const time = new CountdownTimer('timer-1', '2021, 5, 15');
time.start();
