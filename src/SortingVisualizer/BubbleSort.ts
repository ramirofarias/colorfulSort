export function BubbleSort(arr: number[]) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapBars(j);
      }
    }
  }

  function swapBars(j: number) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}
