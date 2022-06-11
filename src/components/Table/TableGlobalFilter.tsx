import TextInput from 'src/components/Input';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  onChange: (value?: string) => void;
};

const TableGlobalFilter = ({ onChange }: Props) => {
  const handleChange = useDebouncedCallback(
    (event) => onChange(event.target.value || undefined),
    350
  );

  return (
    <TextInput
      name="tableGlobalFilter"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default TableGlobalFilter;
