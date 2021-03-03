import { BubbleSort } from "./BubbleSort";
jest.useFakeTimers();

describe("Bubble sort tests", () => {
  let setBars = jest.fn();

  it("Should return an array", () => {
    jest.advanceTimersByTime(10);
    expect(Array.isArray(BubbleSort([1, 2, 3], setBars))).toBe(true);
  });

  it("Should return an ordered array", () => {
    jest.advanceTimersByTime(10);

    expect(BubbleSort([2, 3, 1], setBars)).toStrictEqual([1, 2, 3]);
  });

  it("Should return a random ordered array in correct order", () => {
    jest.advanceTimersByTime(10);
    let randomArray = [];
    const randomNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    for (let i = 0; i < 255; i++) {
      randomArray.push(randomNum(0, 255));
    }
    expect(BubbleSort(randomArray, setBars)).toStrictEqual(
      randomArray.sort((a, b) => a - b)
    );
  });
});
