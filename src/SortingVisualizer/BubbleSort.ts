export async function BubbleSort(
  arr: number[],
  setBars: (arg0: number[]) => void
) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapBars(j);
        setBars([...arr]);
        await sleep(1);
      }
    }
  }

  return arr;

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function swapBars(j: number) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}
