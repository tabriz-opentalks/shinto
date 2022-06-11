import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  children: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ disabled, children, ...rest }: Props): JSX.Element => (
  <button
    className={classNames(
      'font-medium border-2 border-transparent',
      'transition-colors duration-150 ease-in-out',
      'text-white bg-gray-700 px-5 py-2.5 text-sm rounded-xl',
      'hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600'
    )}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
