import React from "react";
import { atoms } from "./styles.css";

function Test() {
  return (
    <div
      className={atoms({
        backgroundColor: "green",
        padding: "8px",
        borderRadius: "8px",
      })}
    >
      <h1 className={atoms({ color: "white" })}>Hello, World!</h1>
    </div>
  );
}

export default Test;
