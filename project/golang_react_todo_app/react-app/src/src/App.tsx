import React from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

function App() {
  const url = "http://localhost:80/api/ping";
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      const data = response.data;
      const message = data.message;
      setState();
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>変更したおああ</h1>

        <h1>{}</h1>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
