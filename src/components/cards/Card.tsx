import { Grid } from "@mui/material";
import * as React from "react";

interface GridCardProps {
  children: React.ReactNode;
}

export const GridCard: React.FC<GridCardProps> = ({ children }) => {
  return (
    <Grid item sm={6} xs={12}>
      <div className="card">{children}</div>
    </Grid>
  );
};
