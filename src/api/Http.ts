import axios, {
  AxiosResponse,
  type AxiosError,
  type AxiosRequestConfig,
} from "axios";

/** Control the conextion with a server and make requests using axios.
 * @property url to connect.
 * @property config the header config.
 * @method get execute get request to the url provided.
 */
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
