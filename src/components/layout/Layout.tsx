import { Toolbar } from "@mui/material";
import { BankList } from "../lists/BankList";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <BankList />
    </div>
  );
};
