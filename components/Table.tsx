import { getElKey } from "@/utils/helper-utils";
import TableRow from "./TableRow";

export interface ITableColumnData {
  value: string | number;
  header?: string;
  cb?: (data: ITableColumnData) => any;
}

export interface ITableRowData {
  [key: string]: ITableColumnData;
}
const DUMMY_DATA: ITableRowData[] = [
  {
    col1: {
      header: "Col1",
      value: "test",
    },
    col2: {
      header: "Co2",
      value: "fdgd",
    },
    action: {
      value: "edit",
      cb: () => {
        console.log("clicked Edit");
      },
    },
  },
];

interface ITable {
  data?: ITableRowData[];
}
const Table = ({ data = DUMMY_DATA }: ITable) => {
  const cols = Object.keys(data[0]);
  const displayHeaders = cols.map((key) => data[0][key].header || key);

  return (
    <>
      <div className="shadow-2x rounded-2xl bg-white p-2 min-w-full">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              {displayHeaders.map((label) => (
                <th key={label} className="px-4 py-2 border">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <TableRow cols={cols} row={row} key={getElKey(row, index)} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
