import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ButtonWrapper.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const ButtonWrapper: FC<ButtonWrapperProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.ButtonWrapper, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
