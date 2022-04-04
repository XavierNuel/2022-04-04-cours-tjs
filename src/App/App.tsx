import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Test<br />
      <Button text="Press the button" 
      evtOnClick={ (arg: any) => {
        console.log(arg);
      }} />
      <Button text="Don't push the ref button" bgColor="tomato" />
      <Button text="Benjamin button"/>
    </div>
  );
}

export default App;
