import styles from "../styles/Home.module.css";

export default function Timer({ hours, minutes, seconds, days, completed }) {
  if (completed) return <span>Presale Completed</span>;
  return (
    <div className={styles.countdown}>
      <p>Remaining </p>
      <ul className="row">
        <li className="col-md-3">
          <article>
            <span className="days">{days}</span>
            <p className="days_ref">Days</p>
          </article>
        </li>
        <li className="col-md-3">
          <article>
            <span className="hours">{hours}</span>
            <p className="hours_ref">Hours</p>
          </article>
        </li>
        <li className="col-md-3">
          <article>
            <span className="minutes">{minutes}</span>
            <p className="minutes_ref">Minutes</p>
          </article>
        </li>
        <li className="col-md-3">
          <article>
            <span className="seconds">{seconds}</span>
            <p className="seconds_ref">Seconds</p>
          </article>
        </li>
      </ul>
    </div>
  );
}
