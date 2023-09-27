import { BankModel } from "../../models/Models";
import { GridCard } from "./Card";

export const BankCard = (props: BankModel) => {
  const { bankName, description, age, url } = props;

  return (
    <GridCard>
      <img src={url} alt={bankName} className="card__image" />
      <h3 className="card__row">{bankName}</h3>
      <p className="card__row">{description}</p>
    </GridCard>
  );
};
