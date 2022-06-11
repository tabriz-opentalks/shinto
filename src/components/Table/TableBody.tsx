import type { Row } from 'react-table';

type props<T = Row<Record<string, unknown>>> = {
  rows: T[];
  prepareRow: (row: T) => void;
};

const TableBody = ({ rows, prepareRow }: props): JSX.Element => (
  <>
    {rows.map((row) => {
      prepareRow(row);

      return (
        <tr
          {...row.getRowProps()}
          key={row.id}
          className="odd:bg-white even:bg-gray-50"
        >
          {row.cells.map((cell) => {
            return (
              <td
                {...cell.getCellProps()}
                key={cell.value}
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {cell.render('Cell')}
              </td>
            );
          })}
        </tr>
      );
    })}
  </>
);

export default TableBody;
