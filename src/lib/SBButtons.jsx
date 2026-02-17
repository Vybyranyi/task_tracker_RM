import { IoAppsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const SBButtons = [
  { icon: <IoAppsOutline />, title: "Overview", link: "/create-task" },
  { icon: <IoBookOutline />, title: "Task", link: "/task-list" },
  { icon: <IoPersonOutline />, title: "Your Team", link: "/team" },
  { icon: <IoChatbubbleEllipsesOutline />, title: "Message", link: "/" },
  { icon: <IoSettingsOutline />, title: "Settings", link: "/" },
];

export default SBButtons;
