// import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function Useref() {
  const id1 = useRef();

  return (
    <div>
      <input ref={id1} type="number" />
      <button onClick={()=>id1.current.focus()}>
        Click
      </button>
    </div>
  );
}

export default Useref;
