import React, { useEffect, useState } from "react";
import { BubbleSort } from "./algorithms/BubbleSort";
import { InsertionSort } from "./algorithms/InsertionSort";
import { MergeSort } from "./algorithms/MergeSort";
import { QuickSort } from "./algorithms/QuickSort";
import { SelectionSort } from "./algorithms/SelectionSort";
import ResetArray from "./components/ResetArray";
import Visualizer from "./components/Visualizer";
import { generateRandomNum } from "./HelperFunctions";

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

  async function handleClickBubbleSort() {
    let step = BubbleSort(bars);
    setDisabledButton(true);
    await drawEachStep(step, setBars);
    setDisabledButton(false);
  }

  async function handleClickSelectionSort() {
    let step = SelectionSort(bars);
    setDisabledButton(true);
    await drawEachStep(step, setBars);
    setDisabledButton(false);
  }

  async function handleClickInsertionSort() {
    let step = InsertionSort(bars);
    setDisabledButton(true);
    await drawEachStep(step, setBars);
    setDisabledButton(false);
  }

  async function handleClickQuickSort() {
    if (isAlreadySorted(bars)) {
      return;
    }
    setDisabledButton(true);
    await QuickSort(bars, 0, bars.length - 1, setBars);
    setDisabledButton(false);
  }

  async function handleClickMergeSort() {
    if (isAlreadySorted(bars)) {
      return;
    }

    setDisabledButton(true);
    await MergeSort(bars, 0, 255, setBars);
    setDisabledButton(false);
  }

  async function drawEachStep(
    step: AsyncGenerator<number[], number[], unknown>,
    setBars: React.Dispatch<React.SetStateAction<number[]>>
  ) {
    while ((await step.next()).done === false) {
      setBars([...(await step.next()).value]);
    }
  }

  function isAlreadySorted(bars: number[]) {
    for (let i = 0; i < bars.length - 1; i++) {
      if (bars[i] > bars[i + 1]) {
        return false;
      }
    }
    return true;
  }

  return (
    <div
      className="wrapper"
      style={{
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 id="titulo">Sorting Visualizer with colorines</h1>

      <ResetArray
        data-testid="resetArray"
        disabledButton={disabledButton}
        generateBars={generateBars}
        color1={colorin}
        color2={bars}
        color3={anotherColorin}
      />
      <Visualizer bars={bars} color1={colorin} color3={anotherColorin} />
      <div className="button--wrapper">
        <button
          disabled={disabledButton}
          onClick={() => {
            handleClickSelectionSort();
          }}
        >
          Selection Sort
        </button>
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
            handleClickInsertionSort();
          }}
        >
          Insertion Sort
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
          Merge Sort
        </button>
      </div>
    </div>
  );
};
