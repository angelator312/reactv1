// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Counter() {
  const [number, setN] = useState(1);
  const [pn, setpN] = useState(1);
  useEffect(() => {
    let e= setTimeout(() => setN(parseInt(number + pn)), 2 * 1000);
    return ()=>clearTimeout(e);
  });
  return (
    <div>
      <input
        value={pn}
        type="number"
        onChange={(e) => setpN(parseInt(e.target.value))}
      />
      <div>
        {/* {typeof number} */}
        {number}
      </div>
    </div>
  );
}

export default Counter;
