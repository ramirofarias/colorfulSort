import { BubbleSort } from "../algorithms/BubbleSort";
jest.useFakeTimers();

describe("Bubble sort tests", () => {
  it("Should return an array", async () => {
    let step = BubbleSort([1, 2, 3]);
    expect(Array.isArray((await step.next()).value)).toBe(true);
  });

  it("Should return an ordered array", () => {
    expect(BubbleSort([2, 3, 1])).toStrictEqual([1, 2, 3]);
  });

  it("Should return a random ordered array in correct order", () => {
    let randomArray = [];
    const randomNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    for (let i = 0; i < 10; i++) {
      randomArray.push(randomNum(0, 10));
    }
    expect(BubbleSort(randomArray)).toStrictEqual(
      randomArray.sort((a, b) => a - b)
    );
  });
});
