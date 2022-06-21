import classNames from 'classnames';
import type { InputWrapperProps } from './types';

const InputWrapper = ({
  children,
  name,
  label,
  required,
  disabled = false,
  wrapperClassName = '',
}: InputWrapperProps): JSX.Element => (
  <div className={classNames(wrapperClassName, { 'cursor-default': disabled })}>
    {label && (
      <label
        className="block text-sm mb-1 font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
        {required && <sup>&nbsp;*</sup>}
      </label>
    )}

    {children}
  </div>
);

export default InputWrapper;
