import swapBars from "./HelperFunctions";

async function partition(
  array: number[],
  start: number,
  end: number,
  setBars: (arg0: number[]) => void
) {
  let pivotIndex = start;
  let pivotValue = array[end];
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      setBars([...array]);

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

  let index = await partition(array, start, end, setBars);
  await Promise.all([
    QuickSort(array, start, index - 1, setBars),
    QuickSort(array, index + 1, end, setBars),
  ]);
}
