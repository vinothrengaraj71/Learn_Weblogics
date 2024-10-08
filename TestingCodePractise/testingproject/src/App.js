import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Learn React Testing</h1>
      <Form />
      <Button label={["rolex", "rocky"]} />
    </div>
  );
}

export default App;
