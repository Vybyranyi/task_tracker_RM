import styles from './IconButton.module.scss';

const IconButton = ({icon, isNotification}) => {
  return (
    <span className={styles.iconButton}>
        {icon}
        {isNotification && <span className={styles.notificationDot}></span>}
    </span>
  )
}

export default IconButton