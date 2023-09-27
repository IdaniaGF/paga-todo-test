import { AxiosError, AxiosResponse } from "axios";
import * as React from "react";

interface ResponseType<DataType> {
  data: DataType;
  error: boolean;
  messageError?: DataType;
}

export const useFetchData = <DataType>(
  initialData: DataType
): [typeof fetch, ResponseType<DataType>, boolean] => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [response, setResponse] = React.useState<ResponseType<DataType>>({
    data: initialData,
    error: false,
    messageError: undefined,
  });

  const fetch = async (
    fetcher: () => Promise<AxiosResponse<DataType> | AxiosError>
  ) => {
    setIsLoading(true);
    const axiosResp = await fetcher();
    if (axiosResp.status == 200) {
      setIsLoading(false);
      setResponse((prev) => ({ ...prev, data: axiosResp.data }));
    } else {
      setIsLoading(false);
      setResponse((prev) => ({
        ...prev,
        error: true,
        messageError: axiosResp.response.data,
      }));
    }
  };
  return [fetch, response, isLoading];
};
