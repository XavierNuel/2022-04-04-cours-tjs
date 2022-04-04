import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [state, setstate] = useState(0);
  return (
    <div className="App">
      Test : {state}
      <br />
      <Button
        evtOnClick={(arg: any) => {
          setstate(state + 1);
          console.log(
            "on était à " + state + " juste avant la propagation dans l'App"
          );
        }}
        color="#0ff"
        type="submit"
        style={{ border: "2px solid #f00" }}
      >
        <div>Enfant 1</div>
        <div>Enfant 2</div>
      </Button>
      <Button bgColor="tomato">Chaine</Button>
      <Button
        bgColor="#000"
        color="#ff0"
        type="reset"
        style={{ border: "5px solid #f0f" }}
      >
        <div>Enfant seul</div>
      </Button>
    </div>
  );
}

export default App;
