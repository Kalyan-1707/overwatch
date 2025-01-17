import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

function AppBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="Resume" icon={<FileCopyIcon />} />
        </Link>
        <Link to="/cover-letter">
          <BottomNavigationAction label="Cover Letter" icon={<ArticleIcon />} />
        </Link>
        <Link to="/settings">
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}

export default AppBar;
