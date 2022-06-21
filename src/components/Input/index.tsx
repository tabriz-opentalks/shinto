import Wrapper from './Wrapper';
import type { TextInputProps } from './types';
import classNames from 'classnames';

const TextInput = ({
  label,
  name,
  disabled = false,
  className = '',
  wrapperClassName = '',
  required,
  ...rest
}: TextInputProps): JSX.Element => (
  <Wrapper
    name={name}
    label={label}
    disabled={disabled}
    required={required}
    wrapperClassName={wrapperClassName}
  >
    <input
      id={name}
      name={name}
      disabled={disabled}
      className={classNames(
        'w-full py-2 px-6 text-gray-800 placeholder-gray-300 rounded-xl border-2 border-gray-100',
        'transition-colors duration-100 ease-out',
        'disabled:pointer-events-none disabled:bg-gray-100',
        'focus:outline-none focus:border-gray-800',
        className
      )}
      aria-describedby={`${name}-description`}
      {...rest}
    />
  </Wrapper>
);

export default TextInput;
