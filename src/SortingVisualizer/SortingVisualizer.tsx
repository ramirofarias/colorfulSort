import { SSL_OP_EPHEMERAL_RSA } from "constants";
import React, { useEffect, useState } from "react";
import { BubbleSort } from "./BubbleSort";

export const SortingVisualizer: React.FC = () => {
  const [bars, setBars] = useState([0]);
  const [colorin, setColorin] = useState(0);
  const [anotherColorin, setAnotherColorin] = useState(0);

  const generateBars = () => {
    const arr = [];
    let prettyColor = generateRandomNum(0, 255);
    let anotherPrettyColor = generateRandomNum(0, 255);
    for (let i = 0; i < 255; i++) {
      arr.push(generateRandomNum(0, 255));
    }
    setBars(arr);
    setColorin(prettyColor);
    setAnotherColorin(anotherPrettyColor);
  };

  useEffect(generateBars, []);

  const generateRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  async function handleClickBubbleSort() {}

  const isAlreadySorted = (array: number[]) => {
    let originalArray = [...array];
    let sortedArray = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      if (originalArray[i] !== sortedArray[i]) return false;
    }
    return true;
  };

  return (
    <div>
      <h1 id="titulo">Sorting Visualizer with colorines</h1>
      <button>Bubble Sort</button>
      <button
        onClick={() => {
          handleClickBubbleSort();
        }}
      >
        Run
      </button>
      <div id="visualizer" style={{ display: "flex" }}>
        {bars.map((barra, idx) => {
          return (
            <div
              className="bar"
              title="bar"
              key={idx}
              style={{
                backgroundColor: `rgb(${barra},${colorin},${anotherColorin}`,
                height: "300px",
                width: "3px",
              }}
            ></div>
          );
        })}
      </div>
      <button title="resetArray" onClick={generateBars}>
        Generate pretty colors
      </button>
    </div>
  );
};