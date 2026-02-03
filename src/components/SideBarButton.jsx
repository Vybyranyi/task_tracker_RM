import styles from "./SideBarButton.module.scss";

const SideBarButton = ({ icon, title }) => {
  return (
    <button className={styles.sideBarButton}>
      <span>{icon}</span>
      <p className="type14">{title}</p>
    </button>
  );
};

export default SideBarButton;
