import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/Styles.tsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.tsx";
import { ApiContactContextProvider } from "./context/ApiContactContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiContactContextProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </ApiContactContextProvider>
);
