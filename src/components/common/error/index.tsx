import { CommonDivProps, CommonPProps } from "@/types/common/props";
import { FC } from "react";

const ErrorInterface: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={className}>
      {children};
    </div>
  );
};

export const ErrorFeedback: FC<CommonPProps> = (props) => {
  const { children, className, ...restProps } = props;
  const errorBase = "text-red-500 text-xs italic";
  return (
    <p {...restProps} className={errorBase}>
      {children}
    </p>
  );
};
