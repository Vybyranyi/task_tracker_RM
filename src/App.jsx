import { Route, Routes } from "react-router";
import "./App.css";
import LayOut from "./components/LayOut";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import HomePage from "./pages/HomePage";
import YourTeamPage from "./pages/YourTeamPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<YourTeamPage />} />
        <Route path="/task-list" element={<TasksList />} />
        <Route path="/create-task" element={<TaskForm />} />
      </Routes>
      <Toaster />
    </LayOut>
  );
}

export default App;
