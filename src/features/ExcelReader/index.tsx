import type { ChangeEvent } from 'react';
import { useMemo } from 'react';
import Button from 'src/components/Button';
import Table from 'src/components/Table';
import ExcelFilePicker from './components/ExcelFilePicker';
import { useExcelReader, useExcelReaderStore } from './useExcelReader';

const ExcelReader = () => {
  const { onChange } = useExcelReader();
  const { columns, rows, removeColumnsAndRows, setCheckedIns, checkedIns } =
    useExcelReaderStore((state) => state);

  const handleFilePick = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onChange(file);
  };

  const displayTable = columns.length && rows.length;
  const checkedInHeader = useMemo(
    () => `Checked-in (${checkedIns.length}/${rows.length})`,
    [checkedIns, rows]
  );

  return displayTable ? (
    <Table
      columns={[
        {
          Header: checkedInHeader,
          // Ooooo, any! :0
          Cell: ({ row }: any) => {
            const id = row.original._id;
            const isCheckedIn = checkedIns.some(
              (checkedIn) => checkedIn === id
            );

            return isCheckedIn ? (
              <span className="inline-flex px-3 py-2 text-xs rounded-lg bg-green-100 text-green-900 border-2 border-transparent">
                Yes
              </span>
            ) : (
              <Button
                size="small"
                onClick={() => {
                  setCheckedIns(id);
                }}
              >
                Check-in
              </Button>
            );
          },
        },
        ...columns.map((item: string) => ({
          Header: item.replace(/([A-Z])/g, ' $1'),
          accessor: item,
        })),
      ]}
      data={rows}
      onClickAction={removeColumnsAndRows}
    />
  ) : (
    <ExcelFilePicker name="excelFilePicker" onChange={handleFilePick} />
  );
};

export default ExcelReader;
