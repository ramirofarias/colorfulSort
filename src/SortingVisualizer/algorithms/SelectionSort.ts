import swapBars from "../HelperFunctions";

export async function* SelectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        await swapBars(array, i, j);
        yield array;
      }
    }
  }
  return array;
}
