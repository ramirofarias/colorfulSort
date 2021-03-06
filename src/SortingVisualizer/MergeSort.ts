import { sleep } from "./HelperFunctions";

async function merge(
  array: number[],
  lowestIndex: number,
  middleIndex: number,
  highestIndex: number,
  setBars: (arg0: number[]) => void
) {
  let tempArray = [];
  let len = middleIndex - lowestIndex;
  for (let i = 0; i < len; i++) {
    tempArray[i] = array[lowestIndex + i];
    await sleep(4);
  }
  let i = 0;
  let j = middleIndex;
  let k = lowestIndex;

  while (i < len && j < highestIndex) {
    if (tempArray[i] <= array[j]) {
      await sleep(4);
      array[k++] = tempArray[i++];
      setBars([...array]);
    } else {
      await sleep(4);
      array[k++] = array[j++];
      setBars([...array]);
    }
  }
  while (i < len) {
    await sleep(4);
    array[k++] = tempArray[i++];
    setBars([...array]);
  }
  await sleep(4);
  setBars([...array]);
}

export async function MergeSort(
  array: number[],
  lowestIndex: number,
  highestIndex: number,
  setBars: (arg0: number[]) => void
) {
  if (highestIndex - lowestIndex > 1) {
    var middle = lowestIndex + ((highestIndex - lowestIndex) >> 1);
    await MergeSort(array, lowestIndex, middle, setBars);
    await MergeSort(array, middle, highestIndex, setBars);
    await merge(array, lowestIndex, middle, highestIndex, setBars);
    setBars([...array]);
  }
}
