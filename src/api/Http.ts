import axios, {
  AxiosResponse,
  type AxiosError,
  type AxiosRequestConfig,
} from "axios";

export class HttpController {
  async get<DataType>(
    url: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<DataType> | AxiosError> {
    try {
      return await axios.get(url, config);
    } catch (error) {
      return error as AxiosError;
    }
  }
}
