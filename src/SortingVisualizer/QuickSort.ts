import swapBars from "./HelperFunctions";

async function partition(array: number[], start: number, end: number) {
  let pivotIndex = start;
  let pivotValue = array[end];
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      await swapBars(array, i, pivotIndex);
      pivotIndex++;
    }
  }

  await swapBars(array, pivotIndex, end);
  return pivotIndex;
}

export async function QuickSort(
  array: number[],
  start: number,
  end: number,
  setBars: (arg0: number[]) => void
) {
  if (start >= end) {
    return [];
  }

  let index = await partition(array, start, end);
  await QuickSort(array, start, index - 1, setBars);
  await QuickSort(array, index + 1, end, setBars);
  setBars([...array]);
}
