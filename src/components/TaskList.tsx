// import React, { useState } from "react";

// const TaskList: React.FC = () => {
//   const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);
//   const [input, setInput] = useState("");

//   const addTask = () => {
//     if (!input.trim()) return;
//     setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
//     setInput("");
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div>
//       <h2>Tasks</h2>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map(({ id, text }) => (
//           <li key={id}>
//             {text} <button onClick={() => deleteTask(id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;

import React, { useState } from "react";

type Task = {
  id: number;
  text: string;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));

    if (editingTaskId === id) {
      setEditingTaskId(null);
      setEditingText("");
    }
  };

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingText("");
  };

  const saveEditing = () => {
    if (!editingText.trim()) return;
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: editingText.trim() } : task
      )
    );
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(({ id, text }) => (
          <li key={id}>
            {editingTaskId === id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveEditing}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                {text}{" "}
                <button onClick={() => startEditing({ id, text })}>Edit</button>
                <button onClick={() => deleteTask(id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
