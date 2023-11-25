import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 2);
  }
  function handleClick2() {
    setCount(count - 2);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>

          <Button onClick={handleClick} variant="primary">
            +
          </Button>{" "}
          <Button onClick={handleClick2} variant="secondary">
            -
          </Button>{" "}
          {count}
        </p>


      </header>
    </div>
  );
}

export default App;
