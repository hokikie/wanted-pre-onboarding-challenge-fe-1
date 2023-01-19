import { CommonButtonProps } from "@/types/common/props";
import { FC } from "react";

const ButtonInterface: FC<CommonButtonProps> = (props) => {
  const { children, className, onClick, type = "button", ...restProps } = props;
  const buttonBaseStyle =
    "font-bold py-2 px-4 rounded disabled:bg-gray-400 hover:bg-opacity-90 hover:ring-2 hover:ring-slate-300 duration-300 cursor-pointer hover:scale-95";

  return (
    <button
      type={type}
      {...restProps}
      className={`${buttonBaseStyle} ${className ?? ""}`}
      onClick={(event) => {
        event.preventDefault();
        onClick && onClick(event);
      }}
    >
      {children}
    </button>
  );
};

const MainButton: FC<CommonButtonProps> = (props) => {
  const { children, className = "", ...restProps } = props;
  return (
    <ButtonInterface
      {...restProps}
      className={`bg-main text-main-contrast ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};
export const SubButton: FC<CommonButtonProps> = (props) => {
  const { children, className = "", ...restProps } = props;
  return (
    <ButtonInterface
      {...restProps}
      className={`bg-sub text-sub-contrast ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};

export default MainButton;
