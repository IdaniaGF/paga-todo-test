import * as React from "react";
import { BankContext } from "../../context/BankContext";
import { BankCard } from "../cards/BankCard";
import { Grid } from "@mui/material";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import { ModalError } from "../modal/ModalError";

export const BankList = () => {
  const { banks, isLoading, handleError } = React.useContext(BankContext);

  console.log(banks);

  return (
    <>
      <Grid container spacing={2} alignItems={"stretch"}>
        {isLoading || banks.length === 0 ? (
          <SkeletonCard num={6} />
        ) : (
          banks.map((bank) => <BankCard key={bank.url} {...bank} />)
        )}
      </Grid>
      <ModalError
        open={handleError.open}
        title="Ocurrió algún error"
        description={
          handleError.message || "Refresque el sitio o inténtelo más tarde"
        }
        handleClose={handleError.close}
      />
    </>
  );
};
