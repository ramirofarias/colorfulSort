import swapBars from "../HelperFunctions";

export async function* BubbleSort(arr: number[]) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        yield arr;
        await swapBars(arr, j, j + 1);
      }
    }
  }

  return arr;
}
