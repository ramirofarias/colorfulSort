import swapBars from "../HelperFunctions";

export async function* InsertionSort(array: number[]) {
  let copy = [...array];
  for (let i = 1; i < copy.length; i++) {
    for (let j = i; j > 0; j--) {
      if (copy[j] < copy[j - 1]) {
        await swapBars(copy, j, j - 1);
        yield copy;
      }
    }
  }
  return copy;
}
