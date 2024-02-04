import React, { useState } from "react";
function Buttons(props) {
  const [x, setx] = useState();
  const [y, sety] = useState();
  const [direction, setDirection] = useState();

  return (
    <div className="button-container">
      <input
        value={x}
        onChange={(e) => setx(e.target.value)}
        placeholder="X value"
        type="text"
      />
      <input
        value={y}
        onChange={(e) => sety(e.target.value)}
        placeholder="Y value"
        type="text"
      />
      <input
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        placeholder="Direction"
        type="text"
      />
      <button onClick={() => props.place(x, y, direction)}>Place</button>

      <button onClick={() => props.move()}>Move</button>
      <button onClick={() => props.rotate("Left")}>Left</button>
      <button onClick={() => props.rotate("Right")}>Right</button>
      <button onClick={() => props.getposition()}>Position</button>
    </div>
  );
}
export default Buttons;
