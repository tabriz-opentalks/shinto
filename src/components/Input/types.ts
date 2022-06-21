import type { HTMLProps, InputHTMLAttributes } from 'react';

export type InputWrapperProps = {
  name: string;
  label?: string;
  wrapperClassName?: string;
} & HTMLProps<HTMLInputElement>;

export type TextInputProps = InputWrapperProps &
  InputHTMLAttributes<HTMLInputElement>;
