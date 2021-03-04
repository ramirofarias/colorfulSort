export default async function swapBars(
  arr: number[],
  firstIndex: number,
  secondIndex: number
) {
  await sleep(4);
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}
async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}
