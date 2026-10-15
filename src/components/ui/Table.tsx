type TableRow = Record<string, string | number>;

type TableProps = {
  columns: string[];
  data: TableRow[];
  striped?: boolean;
};

function Table({ columns, data, striped = false }: TableProps) {
  return (
    <table className={`table${striped ? " table--striped" : ""}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{row[column] ?? "—"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
