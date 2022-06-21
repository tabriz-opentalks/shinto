import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  children: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  disabled,
  children,
  size = 'medium',
  ...rest
}: Props): JSX.Element => (
  <button
    className={classNames(
      'font-medium border-2 border-transparent',
      'transition-colors duration-150 ease-in-out',
      'text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600',
      {
        // `size`
        'px-5 py-2.5 text-sm  rounded-xl': size === 'medium',
        'px-3 py-2 text-xs  rounded-lg': size === 'small',
      }
    )}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
