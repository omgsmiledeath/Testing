import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "shared/ui/ThemeSwitch";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onCollapse}>Collapse</button>
      <div className={cls.switchers}>
        <ThemeSwitch />
      </div>
    </div>
  );
};
