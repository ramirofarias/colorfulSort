import { BubbleSort } from "./BubbleSort";

describe("Bubble sort tests", () => {
  it("Should return an array", () => {
    expect(Array.isArray(BubbleSort([1, 2, 3]))).toBe(true);
  });

  it("Should return an ordered array", () => {
    expect(BubbleSort([2, 3, 1])).toStrictEqual([1, 2, 3]);
  });

  it("Should return a random ordered array in correct order", () => {
    let randomArray = [];
    const randomNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 0; i < 255; i++) {
      randomArray.push(randomNum(0, 255));
    }

    expect(BubbleSort(randomArray)).toStrictEqual(
      randomArray.sort((a, b) => a - b)
    );
  });
});
