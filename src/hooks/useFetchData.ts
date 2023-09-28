import { AxiosError, AxiosResponse } from "axios";
import * as React from "react";

interface ResponseType<DataType> {
  data: DataType;
  error: boolean;
  messageError?: string;
}

export const useFetchData = <DataType>(
  initialData: DataType
): [typeof fetch, boolean] => {
  const [isLoading, setIsLoading] = React.useState(false);
  /* const [response, setResponse] = React.useState<ResponseType<DataType>>({
    data: initialData,
    error: false,
    messageError: undefined,
  }); */

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
      //setResponse((prev) => ({ ...prev, data: axiosResp.data }));
    } else if ("message" in axiosResp) {
      setIsLoading(false);
      return {
        error: true,
        data: initialData,
        messageError: axiosResp.message,
      };
      /* setResponse((prev) => ({
        ...prev,
        error: true,
        messageError:
          "Ocurrió algún error al cargar la página, refresque la página o inténtelo más tarde",
      })); */
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
