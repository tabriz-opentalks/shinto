import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import type { HeaderGroup } from 'react-table';

type props = {
  headerGroups: HeaderGroup<Record<string, unknown>>[];
};

const TableHeader = ({ headerGroups }: props): JSX.Element => (
  <>
    {headerGroups.map((headerGroup) => {
      const { key, ...restHeaderGroupProps } =
        headerGroup.getHeaderGroupProps();

      return (
        <tr key={key} {...restHeaderGroupProps}>
          {headerGroup.headers.map((column) => {
            const { key, ...restColumn } = column.getHeaderProps(
              column.getSortByToggleProps()
            );

            return (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                {...restColumn}
              >
                <div className="flex items-center">
                  {column.render('Header')}
                  {column.isSorted &&
                    (column.isSortedDesc ? (
                      <ArrowSmDownIcon className="w-4 h-4 ml-1" />
                    ) : (
                      <ArrowSmUpIcon className="w-4 h-4 ml-1" />
                    ))}
                </div>
              </th>
            );
          })}
        </tr>
      );
    })}
  </>
);

export default TableHeader;
