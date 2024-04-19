import { ITableColumnData, ITableRowData } from "./Table";

interface ITableRow {
  row: ITableRowData;
  cols: string[];
}

interface ITableColumn {
  data: ITableColumnData;
}

const DataColumn = ({ data }: ITableColumn) => {
  return <td className="border px-4 py-2  font-medium">{data.value}</td>;
};
const ActionColumn = ({ data }: ITableColumn) => {
  return (
    <td className="border container py-2 px-2 mx-0 min-w-full flex flex-colalign-top justify-center items-center">
      <button
        onClick={(e) => {
          e.preventDefault();
          data.cb && data.cb(data);
        }}
        className="bg-purple-900 text-white hover:text-seconday hover:bg-primary font-bold py-2 px-4 rounded"
      >
        {data.value}
      </button>
    </td>
  );
};

const TableRow = ({ row, cols }: ITableRow) => {
  console.log({ row, cols });
  return (
    <tr>
      {cols.map((col: string) =>
        row[col].cb ? (
          <ActionColumn key={col} data={row[col]} />
        ) : (
          <DataColumn key={col} data={row[col]} />
        )
      )}
    </tr>
  );
};

export default TableRow;
