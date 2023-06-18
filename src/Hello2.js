import { useState } from "react";
import "./App.css";
function random() {
  const color = Math.floor(Math.random() * 255);
  const color2 = Math.floor(Math.random() * 255);
  const color3 = Math.floor(Math.random() * 255);
  const a = Math.random() * 2;
  return [color, color2, color3, a];
}
function Hello2() {
  const [[color, color2, color3, a], setC] = useState(random());
  const [n, setN] = useState(1);
  const [v, setV] = useState("Hello");
  let s = [];
  for (let i = 0; i < n; i++) {
    s.push(
      <>
        <h1
          key={i}
          style={{ color: `rgba(${color},${color2},${color3},${a})` }}
        >
          {v}
        </h1>
        <button
          onClick={() => {
            setN(n + 1);
            setC(random());
          }}
        >
          Click for other color!
        </button>
      </>
    );
  }
  return (
    <>
      <input value={v} onChange={(e) => setV(e.target.value)} />
      {s}
    </>
  );
}

export default Hello2;
