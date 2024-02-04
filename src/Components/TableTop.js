import React, { useState } from "react";
import "./style.css";
import RobotSimulator from "./RobotSimulator";
import Buttons from "./Buttons";

function TableTop() {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: "NORTH" });

  const rotateDirection = {
    EAST: "90deg",
    WEST: "270deg",
    NORTH: "360deg",
    SOUTH: "180deg",
  };
  let style = {
    left: `${position.x * 23}%`,
    bottom: `${position.y * 23}%`,
    transform: `rotate(${rotateDirection[position.direction]})`,
    transition: "all 0.5s ease-in-out",
  };
  const place = (x, y, direction) => {
    if (
      x >= 0 &&
      x <= 4 &&
      y >= 0 &&
      y <= 4 &&
      (direction == "WEST" ||
        direction == "EAST" ||
        direction == "NORTH" ||
        direction == "SOUTH")
    ) {
      setPosition({
        x: x,
        y: y,
        direction: direction,
      });
    } else {
      alert("Please select correct input values");
    }
  };
  const rotate = (direction) => {
    let newDirection;
    if (direction === "Left") {
      switch (position.direction) {
        case "EAST":
          newDirection = "NORTH";
          break;
        case "WEST":
          newDirection = "SOUTH";
          break;
        case "NORTH":
          newDirection = "WEST";
          break;
        case "SOUTH":
          newDirection = "EAST";
          break;
        default:
          newDirection = position.direction;
          break;
      }
    }
    if (direction === "Right") {
      switch (position.direction) {
        case "EAST":
          newDirection = "SOUTH";
          break;
        case "WEST":
          newDirection = "NORTH";
          break;
        case "NORTH":
          newDirection = "EAST";
          break;
        case "SOUTH":
          newDirection = "WEST";
          break;
        default:
          newDirection = position.direction;
          break;
      }
    }
    setPosition({
      x: position.x,
      y: position.y,
      direction: newDirection,
    });
  };
  const move = () => {
    if (position.direction === "EAST") {
      if (position.x >= 0 && position.x < 4)
        setPosition({
          x: Number(position.x) + 1,
          y: position.y,
          direction: position.direction,
        });
    } else if (position.direction === "WEST") {
      if (position.x > 0 && position.x <= 4)
        setPosition({
          x: Number(position.x) - 1,
          y: position.y,
          direction: position.direction,
        });
    } else if (position.direction === "NORTH") {
      if (position.y >= 0 && position.y < 4)
        setPosition({
          x: position.x,
          y: Number(position.y) + 1,
          direction: position.direction,
        });
    } else if (position.direction === "SOUTH") {
      if (position.y > 0 && position.y <= 4)
        setPosition({
          x: position.x,
          y: Number(position.y) - 1,
          direction: position.direction,
        });
    }
  };
  const getposition = () => {
    alert(
      "x : " +
        position.x +
        " y : " +
        position.y +
        " direction : " +
        position.direction
    );
  };
  return (
    <div className="container">
      <div className="table-top">
        <RobotSimulator style={style} />
      </div>
      <Buttons
        place={place}
        rotate={rotate}
        move={move}
        getposition={getposition}
      />
    </div>
  );
}
export default TableTop;
