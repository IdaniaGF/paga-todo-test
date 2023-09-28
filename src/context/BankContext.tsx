import * as React from "react";
import { BankModel } from "../models/Models";
import { BanksAPI } from "../api/BanksApi";
import { useFetchData } from "../hooks/useFetchData";
/**
 * BankFetcher is the function that will
 * @returns
 */
const BankFetcher = async () => await new BanksAPI().getBankList();

interface handleErrorType {
  open: boolean;
  close: () => void;
  message: string | string[];
}

export const BankContext = React.createContext<{
  banks: BankModel[];
  isLoading: boolean;
  handleError: handleErrorType;
}>({
  banks: [],
  isLoading: false,
  handleError: { open: false, close: () => {}, message: "" },
});

export const BankContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [banks, setBanks] = React.useState<BankModel[]>([]);
  const [handleError, setHandleError] = React.useState<handleErrorType>({
    open: false,
    close: () => {
      setHandleError({ ...handleError, open: false });
    },
    message: "",
  });

  //const [getBanks, isLoading, handleSuccess, handleError] = useFetchWithModalHandler<BankModel[]>([]);
  const [getBanks, isLoading] = useFetchData<BankModel[]>([]);

  React.useEffect(() => {
    const persistenceStringData = localStorage.getItem("bankList");
    if (persistenceStringData) {
      const persistenseJsonData = JSON.parse(persistenceStringData);
      setBanks(persistenseJsonData);
    } else {
      getBanks(BankFetcher).then((response) => {
        if (!response.error) {
          setBanks(response.data);
          localStorage.setItem("bankList", JSON.stringify(response.data));
        } else {
          setHandleError((prev) => ({ ...prev, open: true }));
        }
      });
    }
  }, []);

  /* React.useEffect(() => {
    if (!handleSuccess.open && handleSuccess.data.length > 0) {
      setBanks(handleSuccess.data);
      localStorage.setItem("bankList", JSON.stringify(handleSuccess.data));
    }
  }, [handleSuccess, handleError]); */

  return (
    <BankContext.Provider
      value={{
        banks,
        isLoading,
        handleError,
        //handleSuccess,
        //handleError,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
