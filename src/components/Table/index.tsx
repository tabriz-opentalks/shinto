import type { Column } from 'react-table';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import TableBody from './TableBody';
import TableGlobalFilter from './TableGlobalFilter';
import TableHeader from './TableHeader';
import TablePagination from './TablePagination';

type Props = {
  columns: Column<Record<string, unknown>>[];
  data: Record<string, unknown>[];
  onClickAction: () => void;
};

const Table = ({ columns, data, onClickAction }: Props): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full flex flex-col space-y-6">
      <TableGlobalFilter
        onChange={setGlobalFilter}
        onClickAction={onClickAction}
      />

      <div className="overflow-x-auto relative sm:rounded-xl">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            <TableHeader headerGroups={headerGroups} />
          </thead>
          <tbody {...getTableBodyProps()}>
            <TableBody rows={page} prepareRow={prepareRow} />
          </tbody>
        </table>

        {page.length === 0 && (
          <div className="w-full inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center p-10 text-center">
            <span>There is nothing to show. 😥</span>
          </div>
        )}

        <TablePagination
          pageOptions={pageOptions}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Table;
