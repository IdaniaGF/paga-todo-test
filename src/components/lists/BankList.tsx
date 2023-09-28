import * as React from "react";
import { BankContext } from "../../context/BankContext";
import { BankCard } from "../cards/BankCard";
import { Grid } from "@mui/material";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import { ModalError } from "../modal/ModalError";

/**
 * Get the bank list from the {@link BankContext} and render a list of banks.
 * While the data is fetched render a Skeleton Card, otherwhise render a {@link CardBank} with the bank info getted.
 * If some error ocurrs trying to get the info, then display a  {@link ModalError} with a short description of the error.
 */
export const BankList = () => {
  const { banks, isLoading, handleError } = React.useContext(BankContext);

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems={"stretch"}
        data-testid="bank-list"
      >
        {isLoading || banks.length === 0 ? (
          <SkeletonCard />
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
