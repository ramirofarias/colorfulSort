import React, { useEffect, useState } from "react";
import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";

export const SortingVisualizer: React.FC = () => {
  const [bars, setBars] = useState([0]);
  const [colorin, setColorin] = useState(0);
  const [anotherColorin, setAnotherColorin] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  const generateBars = () => {
    const arr = [];
    let prettyColor = generateRandomNum(0, 255);
    let anotherPrettyColor = generateRandomNum(0, 255);
    while (arr.length < 255) {
      let randomNum = generateRandomNum(1, 255);
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
    setDisabledButton(true);
    await BubbleSort(bars, setBars);
    setDisabledButton(false);
  }

  async function handleClickQuickSort() {
    setDisabledButton(true);
    await QuickSort(bars, 0, bars.length - 1, setBars);
    setDisabledButton(false);
  }

  async function handleClickMergeSort() {
    setDisabledButton(true);
    await MergeSort(bars, 0, 255, setBars);
    setDisabledButton(false);
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
    <div
      className="wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 id="titulo">Sorting Visualizer with colorines</h1>
      <div className="button--wrapper">
        <button
          disabled={disabledButton}
          onClick={() => {
            handleClickBubbleSort();
          }}
        >
          Bubble Sort
        </button>
        <button
          disabled={disabledButton}
          onClick={() => {
            handleClickQuickSort();
          }}
        >
          QuickSort
        </button>
        <button
          disabled={disabledButton}
          onClick={() => {
            handleClickMergeSort();
          }}
        >
          MergeSort
        </button>
      </div>
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
        {bars.map((barra, idx) => {
          return (
            <div
              className="bar"
              title="bar"
              key={idx}
              style={{
                backgroundColor: `rgb(${colorin},${barra},${anotherColorin}`,
                height: `${barra * 2}px`,
                width: `100%`,
              }}
            ></div>
          );
        })}
      </div>
      <button
        title="resetArray"
        onClick={generateBars}
        style={{
          background: `linear-gradient(90deg,
      rgba( ${colorin},${bars[0]}, ${anotherColorin}),
            rgba(${colorin},${bars[126]}, ${anotherColorin}) 50%,

      rgba(${colorin},${bars[254]}, ${anotherColorin}) 100%
    )`,
          borderRadius: "3px",
          border: "0",
          color: "white",
          fontWeight: "bolder",
          textTransform: "uppercase",
          height: "48px",
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          textShadow: "0px 0px 5px rgba(0,0,0, .4)",
        }}
      >
        Generate pretty colors
      </button>
    </div>
  );
};
