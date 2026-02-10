import { IoDocumentTextOutline } from "react-icons/io5";
import styles from "./TeamMember.module.scss";
import default_user from "../assets/images/members/default_user.png";

const TeamMember = ({member}) => {
  return (
    <div className={styles.TeamMemberComponent}>
      <div className={styles.member}>

        {member.img ? (
          <img src={member.img} alt="member photo" />
        ) : (
          <img src={default_user} alt="default photo" />
        )}

        <div className={styles.memberInfo}>
          <p className="type16">{member.name} {member.surname}</p>
          <p className="type12">{member.position}</p>
        </div>
      </div>

      <p className="type14">{member.description}</p>

      <div className={styles.statistic}>
        <span className={styles.tasksCounter}>
          <IoDocumentTextOutline className={styles.icon} />
          <p>60 Task</p>
        </span>
        <p>4,9 (970 Reviews)</p>
      </div>
    </div>
  );
};

export default TeamMember;
