import { Skeleton } from "@mui/material";
import { GridCard } from "../cards/Card";

interface SkeletonCardProps {
  num: number;
}

export const SkeletonCard = ({ num }: SkeletonCardProps) => {
  const cardsNum = Array(num).fill(true);
  return cardsNum.map((el, i) => (
    <GridCard key={i}>
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
