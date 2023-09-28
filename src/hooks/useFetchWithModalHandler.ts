import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface handleErrorType {
  open: boolean;
  close: () => void;
  message: string | string[];
}

/**This hook make a request to the server. Return an array with four items, a fetch function and a boolean which indicates when the response is waiting, a handleSuccess object and a handleError object. This hook allow to handle success or error response to open and close modals.
 * @param initialData the initial value of the data response
 */
export const useFetchWithModalHandler = <DataType>(
  initialData: DataType
): [typeof fetch, boolean, typeof handleSuccess, typeof handleError] => {
  const [isLoading, setIsLoading] = useState(false);
  const [handleSuccess, setHandleSuccess] = useState({
    open: false,
    close: () => {
      setHandleSuccess({ ...handleSuccess, open: false });
    },
    data: initialData,
  });
  const [handleError, setHandleError] = useState<handleErrorType>({
    open: false,
    close: () => {
      setHandleError({ ...handleError, open: false });
    },
    message: "",
  });

  const fetch = async (
    fetcher: () => Promise<AxiosResponse<DataType> | AxiosError>
  ) => {
    setIsLoading(true);

    const response = await fetcher();
    if ("data" in response && response.status === 200) {
      setHandleSuccess((prev) => ({
        ...prev,
        open: true,
        data: response.data,
      }));
    } else {
      setHandleError((prev) => ({
        ...prev,
        open: true,
        message:
          "Ocurrió algún error al cargar la página, refresque la página o inténtelo más tarde",
      }));
      console.log(response);
    }
    setIsLoading(false);
    return response;
  };

  return [fetch, isLoading, handleSuccess, handleError];
};
