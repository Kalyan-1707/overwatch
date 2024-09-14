import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="App">
        <IconButton
          id="side-bar-btn"
          aria-label="side-bar-button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AutoAwesomeIcon />
        </IconButton>
        {showSidebar && (
          <header className="App-header">
            <p>Hello Overwatch</p>
            <AppBar />
          </header>
        )}
      </div>
    </>
  );
}

export default App;
