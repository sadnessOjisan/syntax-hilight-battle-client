export const assertNever = (data: never) => {
  throw new Error(data);
};
