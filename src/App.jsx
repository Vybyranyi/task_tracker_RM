import "./App.css";
import TeamMember from "./components/TeamMember";
import member1 from "./assets/images/members/member1.jpg";
import Button from "./components/Button";
import StatusBadge from "./components/StatusBadge";
import SideBar from "./components/SideBar";

const member123 = {
  name: "Jessica",
  surname: "Jane",
  position: "Web Developer",
  description:
    "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . .",
    img: member1,
};

function App() {
  return (
    <>
      {/* <TeamMember member={member123} /> */}
      {/* <Button disabled>Click Me</Button> */}
      {/* <Button color="error" disabled>Click Me</Button> */}
      {/* <StatusBadge status="on-going" /> */}
      <SideBar />
    </>
  );
}

// перенести типографію в окремий файл
// замінити css на scss

export default App;
