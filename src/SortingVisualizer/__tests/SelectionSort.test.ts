import { SelectionSort } from "../SelectionSort";

describe("Selection Sort tests", () => {
  let array = [1, 5, 7, 8, 2, 4, 3];
  let step = SelectionSort(array);
  it("Should return an array", async () => {
    expect(Array.isArray((await step.next()).value)).toBe(true);
  });

  it("Should return an ordered array", async () => {
    if ((await step.next()).done) {
      expect((await step.next()).value).toStrictEqual([1, 2, 3, 4, 7, 8]);
    }
  });
});
