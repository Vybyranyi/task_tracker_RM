import "./App.css";
import LayOut from "./components/LayOut";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import YourTeamPage from "./pages/YourTeamPage";

function App() {
  return (
    <>
      <LayOut>
        {/* <YourTeamPage /> */}
        {/* <TaskForm /> */}
        <TasksList />
      </LayOut>
    </>
  );
}

export default App;
