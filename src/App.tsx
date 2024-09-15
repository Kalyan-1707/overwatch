import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Body from "./components/Body";
import { MemoryRouter } from "react-router-dom";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <MemoryRouter>
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
              <Body />
              <AppBar />
            </header>
          )}
        </div>
      </MemoryRouter>
    </>
  );
}

export default App;
