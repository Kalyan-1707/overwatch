import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
    <div className='App'>
       <button className='side-bar-btn' onClick={() =>setShowSidebar(!showSidebar)}>
           &lt;
           </button>
       {showSidebar && <header className="App-header">
        <p>Hello Overwatch</p>
      </header>}
      </div>
    </>
  );
}

export default App;
