import React from 'react';
import './App.css';
import Parent from './props/parent';
import Guest from './state/guest';
import FindUser from './state/findUser';

function App() {
  return (
    <div className="App">
      <h1>This is React App</h1>
      {/* <Parent/> */}
      {/* <Guest/> */}
      <p> 
       <FindUser/>
      </p>
    </div>
  );
}

export default App;
