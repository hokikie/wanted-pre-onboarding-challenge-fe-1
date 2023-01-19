import { CommonDivProps } from "@/types/common/props";
import React, { FC } from "react";

interface ContainerProps extends CommonDivProps {}
const Container: FC<ContainerProps> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`min-h-screen mx-auto flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
