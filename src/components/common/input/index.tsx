import { CommonInputProps } from "@/types/common/props";
import { FC, forwardRef } from "react";

const InputInterface: FC<CommonInputProps> = (props) => {
  const { type, children, className, ...restProps } = props;
  return (
    <input type={type} {...restProps} className={className}>
      {children}
    </input>
  );
};
export const Input = forwardRef<HTMLInputElement, CommonInputProps>(
  (props, forwardRef) => {
    const { type, children, className, onChange, ...restProps } = props;
    const inputBase =
      "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    return (
      <input
        {...restProps}
        type={type}
        ref={forwardRef}
        className={`${inputBase}`}
      >
        {children}
      </input>
    );
  }
);
export const SubmitForm: FC<CommonInputProps> = (props) => {
  const { type, children, className, ...restProps } = props;
  return (
    <InputInterface
      {...restProps}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </InputInterface>
  );
};

export default Input;
