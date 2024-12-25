import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { LinkWrapper, LinkWrapperTheme } from "shared/ui/AppLink/LinkWrapper";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <LinkWrapper
          theme={LinkWrapperTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          -Main Page-
        </LinkWrapper>
        <LinkWrapper theme={LinkWrapperTheme.SECONDARY} to={"/about"}>
          -About-
        </LinkWrapper>
      </div>
    </div>
  );
};
