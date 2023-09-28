import { Toolbar } from "@mui/material";
import { BankList } from "../lists/BankList";
import { Header } from "./Header";

/** Render the {@link Header}, a {@link Toolbar} to make some space between the header and the next component, and the {@link BankList}.
 */
export const Layout = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <BankList />
    </div>
  );
};
