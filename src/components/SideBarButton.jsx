import { useNavigate } from "react-router";
import styles from "./SideBarButton.module.scss";

const SideBarButton = ({ icon, title, link }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.sideBarButton} onClick={() => navigate(link)}>
      <span>{icon}</span>
      <p className="type14">{title}</p>
    </button>
  );
};

export default SideBarButton;
