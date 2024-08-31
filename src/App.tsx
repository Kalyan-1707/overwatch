import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-5xl font-bold">Overwatch</h1>
    </div>
  );
}

export default App;
