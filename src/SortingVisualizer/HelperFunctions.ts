export default async function swapBars(
  arr: number[],
  index: number,
  sleepMs: number
) {
  await sleep(sleepMs);
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
  return arr;
}
async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}
