import { QuickSort } from "../QuickSort";

describe("QuickSort tests", () => {
  let arr = [3, 2, 1];
  let setBars = jest.fn();
  it("Should return an array", () => {
    expect(Array.isArray(QuickSort(arr, 0, arr.length - 1, setBars))).toBe(
      true
    );
  });

  it("Should return an ordered array", () => {
    console.log(QuickSort(arr, 0, arr.length - 1, setBars));
    expect(QuickSort(arr, 0, arr.length - 1, setBars)).toStrictEqual([1, 2, 3]);
  });
});
