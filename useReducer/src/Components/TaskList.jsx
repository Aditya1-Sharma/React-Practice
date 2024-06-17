import React from "react";
import { useTasks, useTasksDispatch } from "./TaskContest";
import { useState } from "react";
function TaskList() {
  const tasks = useTasks();
  console.log(tasks);
  return (
    <>
      <h3>Show tasks</h3>

      <ol className="show">
        <div>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </div>
      </ol>
    </>
  );
}

function Task({ task }) {
  const [isEditing, setisEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          style={{
            background: "yellow",
            display: "flex",
            alignItem: "end",

            justifyContent: "center",
          }}
          onClick={() => setisEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          style={{
            background: "yellow",
            display: "flex",
            alignItem: "end",
            flexDirection: "column",
            placeItem: "center",
          }}
          onClick={() => setisEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <label
        style={{
          background: "yellow",
          display: "flex",
          alignItem: "end",
          flexDirection: "row",
          padding: "20px",
        }}>
        <input
          type="checkbox"
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          style={{
            background: "yellow",
            display: "flex",
            alignItem: "end",
            flexDirection: "column",
          }}
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}>
          Delete
        </button>
      </label>
    </>
  );
}

export default TaskList;
