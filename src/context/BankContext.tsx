import * as React from "react";
import { BankModel } from "../models/Models";
import { BanksAPI } from "../api/BanksApi";
import { useFetchData } from "../hooks/useFetchData";

const BankFetcher = async () => await new BanksAPI().getBankList();

export const BankContext = React.createContext<{
  banks: BankModel[];
  isLoading: boolean;
}>({ banks: [], isLoading: false });

export const BankContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [banks, setBanks] = React.useState<BankModel[]>([]);
  const [getBanks, response, isLoading] = useFetchData<BankModel[]>([]);

  React.useEffect(() => {
    const persistenceStringData = sessionStorage.getItem("bankList");
    if (persistenceStringData) {
      const persistenseJsonData = JSON.parse(persistenceStringData);
      setBanks(persistenseJsonData);
    } else {
      getBanks(BankFetcher);
    }
  }, []);

  React.useEffect(() => {
    if (!response.error && response.data.length > 0) {
      setBanks(response.data);
      sessionStorage.setItem("bankList", JSON.stringify(response.data));
    }
  }, [response]);

  return (
    <BankContext.Provider value={{ banks, isLoading }}>
      {children}
    </BankContext.Provider>
  );
};
