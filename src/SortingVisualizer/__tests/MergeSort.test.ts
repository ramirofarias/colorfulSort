import { MergeSort } from "../MergeSort";

describe("MergeSort tests", () => {
  let arr = [2, 6, 5, 1, 3, 4];
  let sortedArr = [1, 2, 3, 4, 5, 6];
  it("Should return an array", () => {
    expect(Array.isArray(MergeSort(arr))).toBe(true);
  });

  it("Should return a sorted array", () => {
    expect(MergeSort(arr)).toStrictEqual(sortedArr);
  });
});
