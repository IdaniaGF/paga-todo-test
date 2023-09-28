import { Skeleton } from "@mui/material";
import { GridCard } from "../cards/GridCard";

interface SkeletonCardProps {
  /**The number of card to display */
  num?: number;
}

/**
 * Display a list of skeleton cards to use while is waiting the response of a fetch request.
 * An array of numbers is created to iterate and render the skeleton card.
 */
export const SkeletonCard = ({ num = 5 }: SkeletonCardProps) => {
  const cardsNum = [...Array(num).keys()];

  return cardsNum.map((el) => (
    <GridCard key={el}>
      <Skeleton
        variant="rounded"
        className="card__image"
        width={100}
        height={100}
      />
      <Skeleton />
      <Skeleton />
    </GridCard>
  ));
};
