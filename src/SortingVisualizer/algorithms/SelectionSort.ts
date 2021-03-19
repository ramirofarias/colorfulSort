import swapBars from "../HelperFunctions";

export async function* SelectionSort(array: number[]) {
  let copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[i] > copy[j]) {
        await swapBars(copy, i, j);
        yield copy;
      }
    }
  }
  return copy;
}
