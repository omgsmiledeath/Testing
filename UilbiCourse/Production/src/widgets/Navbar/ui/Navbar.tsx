import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {
  LinkWrapper,
  LinkWrapperTheme,
} from "shared/ui/LinkWrapper/LinkWrapper";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <LinkWrapper
          theme={LinkWrapperTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          {t("Main Page Link")}
        </LinkWrapper>
        <LinkWrapper theme={LinkWrapperTheme.SECONDARY} to={"/about"}>
          {t("About Page Link")}
        </LinkWrapper>
      </div>
    </div>
  );
};
