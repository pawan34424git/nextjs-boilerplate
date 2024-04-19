export const getElKey = (obj: any, index?: number) => {
  return (
    (typeof obj === "object" &&
      Object.keys(obj).reduce((a, c) => `${a}${obj[c].value || index}`, "")) ||
    (typeof obj === "string" && obj) ||
    (typeof obj === "number" && `${obj}`) ||
    index
  );
};
