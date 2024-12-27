import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LinkWrapper.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
interface LinkWrapperProps extends LinkProps {
  className?: string;
  theme?: LinkWrapperTheme;
}

export enum LinkWrapperTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export const LinkWrapper: FC<LinkWrapperProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = LinkWrapperTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.LinkWrapper, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
