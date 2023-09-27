import { type AxiosRequestConfig } from "axios";
import { HttpController } from "./Http";

export class API {
  public http: HttpController;
  public config: AxiosRequestConfig;

  public constructor() {
    this.http = new HttpController();
    this.config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }
}
