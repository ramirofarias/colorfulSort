import React from "react";

const Visualizer = (props: {
  bars: number[];
  color1: number;
  color3: number;
}) => {
  return (
    <div
      id="visualizer"
      style={{
        display: "flex",
        alignItems: "center",
        width: "90vw",
        height: "100%",
        overflow: "hidden",
        boxShadow: "0px 0px 25px 2px rgba(0,0,0,.25)",
      }}
    >
      {props.bars.map((barra, idx) => {
        return (
          <div
            data-testid="bar"
            className="bar"
            key={idx}
            style={{
              backgroundColor: `rgb(${props.color1},${barra},${props.color3})`,
              height: `${barra / 3.5}vh`,
              width: `100%`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Visualizer;
