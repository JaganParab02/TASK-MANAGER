import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://127.0.0.1:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title || !description) return;

    await fetch("http://127.0.0.1:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const completeTask = async (id) => {
    const res = window.confirm(
      "Are you sure you want to mark this task as completed?",
    );

    if (!res) return;

    await fetch(`http://127.0.0.1:5000/tasks/${id}/complete`, {
      method: "PUT",
    });

    fetchTasks();
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <input
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>
      <div className="displayTheTasks">
        <div>
          <div className="section-title">Pending Tasks</div>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <div key={task.id} className="task-card pending">
                <div className="task-info">
                  <strong>{task.title}</strong>
                  <div>{task.description}</div>
                </div>
                <button
                  className="complete-btn"
                  onClick={() => completeTask(task.id)}
                >
                  Complete
                </button>
              </div>
            ))}
        </div>

        <div>
          <div className="section-title">Completed Tasks</div>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <div key={task.id} className="task-card completed">
                <div className="task-info">
                  <strong>{task.title}</strong>
                  <div>{task.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
