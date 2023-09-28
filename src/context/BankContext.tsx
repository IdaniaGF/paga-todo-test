import * as React from "react";
import { BankModel } from "../models/Models";
import { BanksAPI } from "../api/BanksApi";
import { useFetchData } from "../hooks/useFetchData";
/**
 * BankFetcher is the function that will be executed to make fetch request.
 */
const BankFetcher = async () => await new BanksAPI().getBankList();

interface handleErrorType {
  open: boolean;
  close: () => void;
  message: string | string[];
}

export interface BankContextValues {
  banks: BankModel[];
  isLoading: boolean;
  handleError: handleErrorType;
}

/**
 * BankContext contain the global status of the bank list, a loader which indicates if the data is being requested, and a handleError object, which allow to open and close error Modals.
 */
export const BankContext = React.createContext<BankContextValues>({
  banks: [],
  isLoading: false,
  handleError: { open: false, close: () => {}, message: "" },
});

/**
 * BankContextProvider provides of the bankList state. After the first render, is checked if there is persistence data in the localStorage set the bakList state to the persistence data, otherwise, a get request is executed. Then if the result is success, store the bankList data response in stored in the localStorage. If the result is error, then the handleError state change the open property to true to allow the user can display a modal error. This handleError state, also provides of a handleClose function to change again the state of the error and an error message obtained from the request.
 */
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

  return (
    <BankContext.Provider
      value={{
        banks,
        isLoading,
        handleError,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
