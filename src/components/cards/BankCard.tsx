import { BankModel } from "../../models/Models";
import { GridCard } from "./GridCard";
/**
 * BankCard is a custom card wrapped by GridCard, displays the bank info.
 */
export const BankCard = (props: BankModel) => {
  const { bankName, description, url } = props;

  return (
    <GridCard classNameModifier="--bank" testid="bank-card">
      <img src={url} alt={bankName} className="card--bank__image" />
      <h3 className="card__row">{bankName}</h3>
      <p className="card__row">{description}</p>
    </GridCard>
  );
};
