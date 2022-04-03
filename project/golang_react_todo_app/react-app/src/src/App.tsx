import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props: any) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name: string) {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map((task: any) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// function App() {
//   const url = "http://localhost:80/api/ping";
//   const [state, setState] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(url).then((response) => {
//       console.log(response.data);
//       const data = response.data;
//       const message = data.message;
//     });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>変更したおああ</h1>

//         <h1>{}</h1>

//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
