import { getElKey } from "@/utils/helper-utils";

test("test getElKey", () => {
  expect(getElKey(123)).toBe("123");
  expect(getElKey("123")).toBe("123");
  expect(getElKey(undefined, 1)).toBe("1");

  const tableRowData = {
    col1: {
      value: "ABC",
    },
    col2: {
      value: "xyz",
    },
    action: {
      nonvalue: "edit",
    },
  };
  const rowIndex = 99;
  expect(getElKey(tableRowData, rowIndex)).toBe("ABCxyz99");
});
