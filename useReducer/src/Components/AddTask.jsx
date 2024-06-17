import { useState } from "react";
import { useTasksDispatch } from "./TaskContest";

let nextId = 3;
function AddTask() {
  const [text, settext] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
  function handleClick() {
    settext("");
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }
}

export default AddTask;
