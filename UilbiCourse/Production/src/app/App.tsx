import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>CHANGE THEME</button>
      <h1>Some component after this text.</h1>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
