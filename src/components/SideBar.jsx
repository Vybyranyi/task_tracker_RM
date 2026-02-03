import styles from "./SideBar.module.scss";
import SideBarButton from "./SideBarButton";
import { IoAppsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
        <SideBarButton icon={<IoAppsOutline />} title="Overview"/>
        <SideBarButton icon={<IoBookOutline />} title="Task"/>
        <SideBarButton icon={<IoPersonOutline />} title="Your Team"/>
        <SideBarButton icon={<IoChatbubbleEllipsesOutline />} title="Message"/>
        <SideBarButton icon={<IoSettingsOutline />} title="Settings"/>
    </aside>
  )
}

export default SideBar