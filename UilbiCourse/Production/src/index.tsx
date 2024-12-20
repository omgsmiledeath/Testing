import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./theme/ThemeContextProvider";

render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}
  >
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
