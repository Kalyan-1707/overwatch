import TextField from "@mui/material/TextField";
import "./SettingsPage.css"
import { validateKey } from "../../utils/gptHelper";
import Button from '@mui/material/Button';
import { useState } from "react";



function SettingsPage() {

  const [apiKey,setapiKey] = useState('');
  const [error, setError] = useState(false);

  async function isKeyValid(key:string) {
    if(await validateKey(key)){ 
      //add toast notification
    }
    else{
      setError(true);
    }
  }

  return (
    <div className="settings-page-container">
      <TextField
        error={error}
        id="outlined-api-key"
        label="API Key"
        type="password"
        fullWidth
        color="primary"
        onChange={(e) => setapiKey(e.target.value)}
        helperText={error ? "Invalid API Key." : null}
      />
      <Button variant="contained" onClick={() => validateKey(apiKey)}>Contained</Button>
    </div>
  );
}

export default SettingsPage;
