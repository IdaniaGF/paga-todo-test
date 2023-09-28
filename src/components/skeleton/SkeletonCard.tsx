import { Skeleton } from "@mui/material";
import { GridCard } from "../cards/Card";

interface SkeletonCardProps {
  num: number;
}

export const SkeletonCard = ({ num }: SkeletonCardProps) => {
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
