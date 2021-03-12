import { MergeSort } from "../algorithms/MergeSort";

describe("MergeSort tests", () => {
  const setBars = jest.fn();
  let arr = [2, 6, 5, 1, 3, 4];
  let sortedArr = [1, 2, 3, 4, 5, 6];
  it("Should return an array", () => {
    expect(Array.isArray(MergeSort(arr, 0, arr.length, setBars))).toBe(true);
  });

  it("Should return a sorted array", () => {
    expect(MergeSort(arr, 0, arr.length, setBars)).toStrictEqual(sortedArr);
  });
});
