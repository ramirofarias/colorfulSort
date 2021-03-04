import swapBars from "./HelperFunctions";

describe("Helper Functions tests", () => {
  it("Should swap two array elements", async () => {
    let arr = [1, 2];
    const result = await swapBars(arr, 0, 1);
    expect(result).toStrictEqual([2, 1]);
  });
});
