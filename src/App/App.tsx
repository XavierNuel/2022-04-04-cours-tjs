import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Test<br />
      <Button
      evtOnClick={ (arg: any) => {
        console.log(arg);
      }}>
        <div>Enfant 1</div>
        <div>Enfant 2</div>
      </Button>
      <Button bgColor="tomato">Chaine</Button>
      <Button>
        <div>Enfant seul</div>
      </Button>
    </div>
  );
}

export default App;
