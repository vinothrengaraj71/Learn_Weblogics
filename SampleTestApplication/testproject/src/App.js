import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Learn React</h1>
      <h1 data-testid="val">{count}</h1>
      <input type="text" />
      <button title="addButton" onClick={() => setCount(count + 1)}>
        ADD
      </button>
      {/* <Button /> */}
    </div>
  );
}

export default App;
