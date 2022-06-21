import Wrapper from 'src/components/Input/Wrapper';
import type { TextInputProps } from 'src/components/Input/types';
import { UploadIcon } from '@heroicons/react/outline';

const ExcelFilePicker = ({
  name,
  required,
  ...rest
}: TextInputProps): JSX.Element => (
  <Wrapper
    name={name}
    required={required}
    wrapperClassName="bg-gray-50 rounded-lg relative flex items-center justify-center py-20 px-12 md:px-48 w-full md:w-auto"
  >
    <div className="flex flex-col justify-center items-center space-y-6">
      <UploadIcon width={36} height={36} />

      <div className="text-sm flex flex-col space-y-2 items-center text-center">
        <span className="font-bold">Pick the Excel file</span>
        <p className="text-xs text-gray-600">XLS or XLSX</p>
      </div>
    </div>
    <input
      id={name}
      name={name}
      type="file"
      accept=".xlsx, .xls"
      className="absolute opacity-0 h-full inset-0 w-full cursor-pointer"
      aria-describedby={`${name}-description`}
      {...rest}
    />
  </Wrapper>
);

export default ExcelFilePicker;
