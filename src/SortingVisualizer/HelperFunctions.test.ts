import swapBars from "./HelperFunctions";

describe("Helper Functions tests", () => {
  it("Should swap two array elements", async () => {
    const result = await swapBars([1, 2], 0, 1);
    expect(result).toStrictEqual([2, 1]);
  });
});
