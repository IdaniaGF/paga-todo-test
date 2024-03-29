import { createTheme } from "@mui/material";
/**The custom theme of the application, it uses {@link createTheme} function from Material-UI */
export const theme = createTheme({
  typography: {
    fontFamily: '"Libre Franklin", sans-serif',
  },
  palette: {
    primary: {
      main: "#8abfa8",
      light: "#aef2d4",
      dark: "#537365",
    },
    secondary: {
      main: "#bf928a",
      light: "#d6a490",
      dark: "#40201b",
    },
  },
});
