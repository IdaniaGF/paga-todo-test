import { Search } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";

/** A fast header to display the name of the app */
export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Search />
        <h1 className="header__item">Encuentra tu Banco</h1>
      </Toolbar>
    </AppBar>
  );
};
