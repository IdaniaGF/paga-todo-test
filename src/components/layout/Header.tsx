import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const nav = [
  { label: "Home", path: "/" },
  { label: "Contactos", path: "contactos" },
  { label: "Nuevo", path: "nuevo" },
];

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <nav>
          {nav.map((el) => (
            <Link to={`${el.path}`} key={el.label}>
              {el.label}{" "}
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};
