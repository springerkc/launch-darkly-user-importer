export const sleep = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const insertSpace = (length: number) => new Array(length).fill('').reduce(acc => `${acc} `) as string;
