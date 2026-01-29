import "./App.css";
import TeamMember from "./components/TeamMember";
import member1 from "./assets/images/members/member1.jpg";

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
      <TeamMember member={member123} />
    </>
  );
}

// перенести типографію в окремий файл
// замінити css на scss

export default App;
