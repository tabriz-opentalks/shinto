import { nanoid } from 'nanoid';
import { read, utils } from 'xlsx';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Column = string;
type Row = Record<Column, string>;

type ExcelReaderState = {
  columns: Array<Column>;
  setColumns: (columns: Array<Column>) => void;
  rows: Array<Row>;
  setRows: (columns: Array<Row>) => void;
  checkedIns: Array<string>;
  setCheckedIns: (id: string) => void;
  removeColumnsAndRows: () => void;
};

export const useExcelReaderStore = create(
  persist<ExcelReaderState>(
    (set, get) => {
      const persistedColumns = get()?.columns;
      const persistedRows = get()?.rows;
      const persistedCheckedIns = get()?.checkedIns;

      return {
        columns: persistedColumns || [],
        setColumns: (columns: Array<Column>) => set({ columns }),
        rows: persistedRows || [],
        setRows: (rows: Array<Row>) => set({ rows }),
        checkedIns: persistedCheckedIns || [],
        setCheckedIns: (id: string) =>
          set((state) => ({
            checkedIns: [...state.checkedIns, id],
          })),
        removeColumnsAndRows: () =>
          set({ columns: [], rows: [], checkedIns: [] }),
      };
    },
    { name: 'checkedIns' }
  )
);

export const useExcelReader = () => {
  const { setColumns, setRows } = useExcelReaderStore((state) => state);

  const onChange = async (file: File) => {
    const data = await file.arrayBuffer();
    /* data is an ArrayBuffer */
    const workbook = read(data, { type: 'binary' });

    /* Get first worksheet */
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];

    const [columns, ...rows] = utils.sheet_to_json(worksheet, { header: 1 });

    setColumns(columns);
    setRows(
      rows.map((row) =>
        columns.reduce(
          (prev: Record<Column, string>, current: string, index: number) => ({
            ...prev,
            ...{ [current]: row[index] || '-' },
          }),
          { _id: nanoid() }
        )
      )
    );
  };

  return { onChange };
};
