import styles from './UserInfo.module.scss';
import IconButton from "./IconButton";
import { IoNotificationsOutline } from "react-icons/io5";
import UserImg from "../assets/images/members/member1.jpg";

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
        <div className={styles.userName}>
            <p className="type24">Olivia Rhye</p>
            <p className={`type16 ${styles.text}`}>Let's finish your task today!</p>
        </div>
        <div className={styles.userPhoto}>
            <IconButton icon={<IoNotificationsOutline />} />
            <img src={UserImg} />
        </div>
    </div>
  )
}

export default UserInfo