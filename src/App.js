import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import TestA from './components/TestA.js';
import TestB from './components/TestB.js';
const worker = new Worker('sum.worker.js', { type: 'module' });

function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log('button clicked');
    worker.postMessage({ data: "123456789" });
    worker.onmessage = function (event) {
        console.log('Message received from worker -> '+ event.data);
        event.data && setData(event.data);
        worker.terminate();
    }
  },[])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h3>Sum is: {data}</h3>
      <TestA />
      <TestB />
    </div>
  );
}

export default App;
