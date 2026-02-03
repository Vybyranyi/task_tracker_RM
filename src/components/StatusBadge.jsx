import styles from "./StatusBadge.module.scss";

const StatusBadge = ({ status }) => {
    // approved, delayed, re-work, on-going (slug)

    let text = "No status"

    switch (status) {
        case "approved":
            text = "Approved"
            break;
        case "delayed":
            text = "Delayed"
            break;
        case "re-work":
            text = "Re-work"
            break;
        case "on-going":
            text = "On going"
            break;

    }

  return (
    <div className={`type12 ${styles.statusBadge} ${styles[status]}`}>{text}</div>
  )
}

export default StatusBadge