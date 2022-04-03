import React, { useState } from "react";

type Props = {
  addTask: Function;
};

function Form(props: Props) {
  const [name, setName] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    props.addTask(name);

    console.log("新しいタスクを送信");
    setName("");
  }

  function handleChange(event: any): any {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>

      <button type="button" onClick={() => alert("hi!")}>
        Say hi!
      </button>
    </form>
  );
}

export default Form;
