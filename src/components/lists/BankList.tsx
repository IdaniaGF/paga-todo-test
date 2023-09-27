import { useContext } from "react";
import { BankContext } from "../../context/BankContext";
import { BankCard } from "../cards/BankCard";
import { Grid } from "@mui/material";
import { SkeletonCard } from "../skeleton/SkeletonCard";

export const BankList = () => {
  const { banks, isLoading } = useContext(BankContext);

  return (
    <Grid container spacing={2} alignItems={"stretch"}>
      {isLoading ? (
        <SkeletonCard num={6} />
      ) : (
        banks.map((bank) => <BankCard key={bank.url} {...bank} />)
      )}
    </Grid>
  );
};
