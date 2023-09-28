import { Grid } from "@mui/material";
import * as React from "react";

interface GridCardProps {
  /**Allow to provide content to the card */
  children: React.ReactNode;
  /**An optional class name to add styles variants */
  classNameModifier?: string;
  /** The id used to test this component.*/
  testid?: string;
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
  testid,
  xs = 12,
  sm = 6,
  md,
  lg,
}) => {
  return (
    <Grid item sm={sm} xs={xs} md={md} lg={lg}>
      <div className={`card${classNameModifier}`} data-testid={testid}>
        {children}
      </div>
    </Grid>
  );
};
