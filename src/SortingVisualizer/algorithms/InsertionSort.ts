import swapBars from "../HelperFunctions";

export async function* InsertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        await swapBars(array, j, j - 1);
        yield array;
      }
    }
  }
  return array;
}
