import PropTypes from "prop-types";
import styles from "./Status.module.css";
export default function Status({ status }) {
  let statusClass = styles.status;

  if (status === "В работе") {
    statusClass += ` ${styles.statusActive}`;
  } else if (status === "Выполнено") {
    statusClass += ` ${styles.statusDone}`;
  }

  return (
    <div className={statusClass}>
      <p className={styles.statusText}>{status}</p>
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.string,
};
