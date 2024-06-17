import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { TaskContest } from "./Components/TaskContest";
function App() {
  const [count, setCount] = useState(0);

  return (
    <TaskContest>
      <h1>Scaling up context and Reducer</h1>
      <AddTask />
      <TaskList />
    </TaskContest>
  );
}

export default App;
