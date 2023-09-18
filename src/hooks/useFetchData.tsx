import * as React from "react";
import { HttpResponse } from "../Types";

export const useFetchData = <FetcherResponse,>() => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [handleError, setHandleError] = React.useState({
    open: false,
    message: undefined as string[] | string | undefined,
    handleClose: () => setHandleError({ ...handleError, open: false }),
  });
  const [handleSuccess, setHandleSuccess] = React.useState({
    open: false,
    handleClose: () => setHandleSuccess({ ...handleSuccess, open: false }),
  });

  const fetch = (fetcher: () => HttpResponse<FetcherResponse>) => {
    setIsLoading(true);
    const response = fetcher();
    if (response.status == 200) {
      setTimeout(() => setIsLoading(false), 1000);
      setHandleSuccess({ ...handleSuccess, open: true });
      return response.data;
    } else {
      setTimeout(() => setIsLoading(false), 1000);
      setHandleError({
        ...handleError,
        open: true,
        message: response.error,
      });
    }
  };
  return [fetch, isLoading, handleSuccess, handleError];
};
