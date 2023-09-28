import { Grid } from "@mui/material";
import * as React from "react";

interface GridCardProps {
  /**Allow to provide content to the card */
  children: React.ReactNode;
  /**An optional class name to add styles variants */
  classNameModifier?: string;
  /**Xs, sm, md and lg are the grid column breakpoints, by default xs is 12 and sm 6s */
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}
/**
 * GridCard is a Grid customizable element which wrap content
 */
export const GridCard: React.FC<GridCardProps> = ({
  children,
  classNameModifier,
  xs = 12,
  sm = 6,
  md,
  lg,
}) => {
  return (
    <Grid item sm={sm} xs={xs} md={md} lg={lg}>
      <div className={`card${classNameModifier}`}>{children}</div>
    </Grid>
  );
};
