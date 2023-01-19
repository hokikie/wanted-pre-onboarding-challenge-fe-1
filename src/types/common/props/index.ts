import { HTMLProps as Props } from "react";

export type CommonInputProps = Omit<Props<HTMLInputElement>, "classID">;
export type CommonLabelProps = Omit<Props<HTMLLabelElement>, "classId">;
export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;
export type CommonPProps = Omit<Props<HTMLParagraphElement>, "classID">;

export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
