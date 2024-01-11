import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.PropsWithChildren{
  onClick: () => void
  appearance?: "primary" | "secondary"
  className?: string
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  appearance = 'primary',
  className,
}) => (<button
  type="button"
  className={classNames(
    "font-bold py-2 px-4 rounded",
    appearance === "primary" && "bg-blue-500 text-white",
    appearance === "secondary" && "bg-gray-200 text-gray-700",
    className,
  )}
  onClick={onClick}
>{children}</button>);