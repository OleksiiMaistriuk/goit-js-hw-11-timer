import CountdownTimer from './timer';
import './styles.css';
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
