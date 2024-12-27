import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitch.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/ShuffleLight.svg";
import DarkIcon from "shared/assets/icons/Shuffle.svg";
import { ButtonWrapper, ThemeButton } from "shared/ui/ButtonWrapper";

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonWrapper
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitch, {}, [className])}
      onClick={() => toggleTheme()}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </ButtonWrapper>
  );
};
