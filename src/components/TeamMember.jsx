import { IoDocumentTextOutline } from "react-icons/io5";
import "./TeamMember.scss";

const TeamMember = ({member}) => {
  return (
    <div className="TeamMemberComponent">
      <div className="member">
        <img src={member.img} alt="member photo" />
        <div className="memberInfo">
          <p className="type16">{member.name} {member.surname}</p>
          <p className="type12">{member.position}</p>
        </div>
      </div>

      <p className="type14">{member.description}</p>

      <div className="statistic">
        <span className="tasksCounter">
          <IoDocumentTextOutline className="icon" />
          <p>60 Task</p>
        </span>
        <p>4,9  (970 Reviews)</p>
      </div>
    </div>
  );
};

export default TeamMember;
