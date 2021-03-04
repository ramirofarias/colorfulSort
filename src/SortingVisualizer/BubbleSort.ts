import swapBars from "./HelperFunctions";

export async function BubbleSort(
  arr: number[],
  setBars: (arg0: number[]) => void
) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swapBars(arr, j, 0);
        setBars([...arr]);
      }
    }
  }

  return arr;
}
