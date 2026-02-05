import styles from "./YourTeamPage.module.scss";
import YourTeamMembers from "../lib/YourTeamMembers";
import TeamMember from "../components/TeamMember";

const YourTeamPage = () => {
  return (
    <>
        <h2 className="type24">Your Team and & Managers</h2>
        <div className={styles.teamContainer}>
            {YourTeamMembers.map((member, index) => (
                <TeamMember member={member} key={index}/>
            ))}
        </div>
    </>
  )
}

export default YourTeamPage