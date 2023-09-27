import { Search } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <h1 className="header__item">
          Encuentra tu Banco
          <Search />{" "}
        </h1>
      </Toolbar>
    </AppBar>
  );
};
