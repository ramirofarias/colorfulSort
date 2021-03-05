import React, { useEffect, useState } from "react";
import { BubbleSort } from "./BubbleSort";
import { QuickSort } from "./QuickSort";

export const SortingVisualizer: React.FC = () => {
  const [bars, setBars] = useState([0]);
  const [colorin, setColorin] = useState(0);
  const [anotherColorin, setAnotherColorin] = useState(0);

  const generateBars = () => {
    const arr = [];
    let prettyColor = generateRandomNum(0, 255);
    let anotherPrettyColor = generateRandomNum(0, 255);
    while (arr.length <= 255) {
      let randomNum = generateRandomNum(0, 255);
      if (arr.indexOf(randomNum) === -1) {
        arr.push(randomNum);
      }
    }
    setBars(arr);
    setColorin(prettyColor);
    setAnotherColorin(anotherPrettyColor);
  };

  useEffect(generateBars, []);

  const generateRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  async function handleClickBubbleSort() {
    await BubbleSort(bars, setBars);
  }

  function handleClickQuickSort() {
    QuickSort(bars, 0, bars.length - 1, setBars);
  }

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
      <button
        onClick={() => {
          handleClickBubbleSort();
        }}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          handleClickQuickSort();
        }}
      >
        QuickSort
      </button>
      <div
        id="visualizer"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
        }}
      >
        {bars.map((barra, idx) => {
          return (
            <div
              className="bar"
              title="bar"
              key={idx}
              style={{
                backgroundColor: `rgb(${barra},${colorin},${anotherColorin}`,
                height: `${barra * 2}px`,
                width: "4px",
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
