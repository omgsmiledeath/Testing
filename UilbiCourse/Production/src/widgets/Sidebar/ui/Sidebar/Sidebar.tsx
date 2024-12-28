import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "widgets/LangSwithcer";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed((prev) => !prev);
  const { t } = useTranslation();
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onCollapse}>{t("Collapse")}</button>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
