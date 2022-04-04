import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      Test
      <br />
      <Button
        evtOnClick={(arg: any) => {
          console.log(arg);
        }}
        color="#0ff"
        type="submit"
        style={{border: '2px solid #f00'}}
      >
        <div>Enfant 1</div>
        <div>Enfant 2</div>
      </Button>
      <Button bgColor="tomato">Chaine</Button>
      <Button bgColor="#000" color="#ff0" type="reset">
        <div>Enfant seul</div>
      </Button>
    </div>
  );
}

export default App;
