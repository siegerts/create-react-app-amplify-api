import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  const [msg, setMsg] = useState("");

  const fetchMessage = async () => {
    let resp = await API.get("apidf68e9a6", "/items");
    setMsg(resp);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>

      <div>
        <h1>{msg}</h1>
        <button onClick={fetchMessage}>Fetch message</button>
      </div>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default App;
