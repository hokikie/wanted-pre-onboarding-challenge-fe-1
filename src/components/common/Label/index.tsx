import { CommonLabelProps } from "@/types/common/props";
import { FC } from "react";

const labelBase = "block text-gray-700 text-sm font-bold";

const Label: FC<CommonLabelProps> = (props) => {
  const { children, className, htmlFor, ...restProps } = props;
  return (
    <label
      {...restProps}
      htmlFor={htmlFor}
      className={`${labelBase} ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
