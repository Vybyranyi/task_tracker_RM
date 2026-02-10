import "./App.css";
import LayOut from "./components/LayOut";
import TaskForm from "./components/TaskForm";
import YourTeamPage from "./pages/YourTeamPage";

function App() {
  return (
    <>
      <LayOut>
        {/* <YourTeamPage /> */}
        <TaskForm />
      </LayOut>
    </>
  );
}

export default App;
