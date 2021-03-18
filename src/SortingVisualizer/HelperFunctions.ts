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

export async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

export const generateRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
