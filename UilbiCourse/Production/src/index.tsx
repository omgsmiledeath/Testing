import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}
  >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
