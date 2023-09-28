import { AxiosError, AxiosResponse } from "axios";
import * as React from "react";

interface ResponseType<DataType> {
  /**The data that is expecting to get from the request*/
  data: DataType;
  /**If true then the request failed*/
  error: boolean;
  /**Some error message that the server can send throught the response*/
  messageError?: string;
}

/**This hook make a request to the server. Return an array with two items, a fetch function and a boolean which indicates when the response is waiting.
 * @param initialData the initial value of the data response
 */
export const useFetchData = <DataType>(
  initialData: DataType
): [typeof fetch, boolean] => {
  const [isLoading, setIsLoading] = React.useState(false);

  const fetch = async (
    fetcher: () => Promise<AxiosResponse<DataType> | AxiosError>
  ): Promise<ResponseType<DataType>> => {
    setIsLoading(true);
    const axiosResp = await fetcher();
    if ("data" in axiosResp && axiosResp.status == 200) {
      setIsLoading(false);
      return {
        error: false,
        data: axiosResp.data,
      };
    } else if ("message" in axiosResp) {
      setIsLoading(false);
      return {
        error: true,
        data: initialData,
        messageError: axiosResp.message,
      };
    } else {
      return {
        error: true,
        data: initialData,
        messageError: "Ocurrió algún error",
      };
    }
  };
  return [fetch, isLoading];
};
