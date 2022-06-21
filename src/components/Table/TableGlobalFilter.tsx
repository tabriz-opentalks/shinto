import Button from 'src/components/Button';
import TextInput from 'src/components/Input';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  onChange: (value?: string) => void;
  onClickAction: () => void;
};

const TableGlobalFilter = ({ onChange, onClickAction }: Props) => {
  const handleChange = useDebouncedCallback(
    (event) => onChange(event.target.value || undefined),
    350
  );

  return (
    <div className="flex items-center space-x-4">
      <TextInput
        name="tableGlobalFilter"
        placeholder="Search..."
        onChange={handleChange}
        wrapperClassName="flex-1"
      />
      <Button onClick={onClickAction}>Pick a new Excel file</Button>
    </div>
  );
};

export default TableGlobalFilter;
