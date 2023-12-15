import React from "react";
import axios from "axios";

export default function Todo(props: any) {
  function deleteTask(): void {
    console.log(props, "props");
    const url = `http://localhost:80/api/task/${props.id}`;
    axios.delete(url).then((response) => {
      console.log(response);
    });
  }

  function editTask(): void {
    console.log(props, "props");
    const url = `http://localhost:80/api/task/${props.id}`;
    const params = new URLSearchParams();
    // params.append("name", name);
    axios.put(url, params).then((response) => {
      console.log(response);
    });
  }

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor="{props.id}">
          {props.name}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn">
          編集 <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" onClick={deleteTask}>
          削除 <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}
