import Counter from './Counter'
import Hello from './Hello'
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Useref from './useRef';
import Hello2 from './Hello2';

function App() {
  const [select,setS]=useState("1");
  return (
    <div className="App">
      <header className="App-header">
        <select id={"s"} onChange={(e)=>setS(e.target.value)}>
          <option value="1" defaultChecked="true">React</option>
          <option value="2">Counter</option>
          <option value="3">Hello</option>
          <option value="4">Useref</option>
          <option value="5">Input</option>
        </select>
        {/* <span>{typeof select}</span> */}
        {select==="1" ? <img src={logo} className="App-logo" alt="logo" />:null}
        {select==="2" ? <Counter />:null}
        {select==="3" ? <Hello />:null}
        {select==="4" ? <Useref />:null}
        {select==="5" ? <Hello2 />:null}
      </header>
    </div>
  );
}

export default App;
