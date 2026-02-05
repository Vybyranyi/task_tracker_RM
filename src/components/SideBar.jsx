import styles from "./SideBar.module.scss";
import SideBarButton from "./SideBarButton";
import SBButtons from "../lib/SBButtons";

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      {SBButtons.map((button, index) => (
        <SideBarButton icon={button.icon} title={button.title} key={index}/>
      ))}
    </aside>
  )
}

export default SideBar