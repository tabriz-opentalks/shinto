import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

type props = {
  pageOptions: number[];
  pageCount: number;
  gotoPage: (pageNumber: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  pageIndex: number;
  pageSize: number;
};

const TablePagination = ({
  pageOptions,
  gotoPage,
  pageCount,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}: props): JSX.Element => (
  <div className="flex items-center justify-between px-0 md:px-4 py-4">
    <div className="flex items-center justify-between space-x-1">
      <button onClick={() => gotoPage(0)}>
        <ChevronDoubleLeftIcon className="w-4 h-4 text-gray-500" />
      </button>
      <button onClick={previousPage}>
        <ChevronLeftIcon className="w-4 h-4 text-gray-500" />
      </button>
      <button onClick={nextPage}>
        <ChevronRightIcon className="w-4 h-4 text-gray-500" />
      </button>
      <button onClick={() => gotoPage(pageCount - 1)}>
        <ChevronDoubleRightIcon className="w-4 h-4 text-gray-500" />
      </button>
    </div>
    <span className="text-sm text-gray-500">
      Page{' '}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </span>
    <select
      value={pageSize}
      className="text-sm bg-transparent text-gray-500"
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[5, 10, 20, 30, 50, 100].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize} items
        </option>
      ))}
    </select>
  </div>
);

export default TablePagination;
