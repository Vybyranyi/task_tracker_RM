import styles from './Header.module.scss';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <header className={styles.header}>
        <UserInfo />
    </header>
  )
}

export default Header