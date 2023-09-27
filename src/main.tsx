import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/Styles.tsx";
import { BankContextProvider } from "./context/BankContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BankContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BankContextProvider>
);
