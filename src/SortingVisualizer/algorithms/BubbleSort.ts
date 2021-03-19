import swapBars from "../HelperFunctions";

export async function* BubbleSort(arr: number[]) {
  const len = arr.length;
  const copy = [...arr];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        yield copy;
        await swapBars(copy, j, j + 1);
      }
    }
  }

  return copy;
}
