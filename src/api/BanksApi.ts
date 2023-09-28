import { BankModel } from "../models/Models";
import { API } from "./Abstract";

/** The API bank, provide the methods to connect with a server and make request. */
export class BanksAPI extends API {
  public host = "https://dev.obtenmas.com";
  public constructor() {
    super();
  }

  public async getBankList() {
    return await this.http.get<BankModel[]>(
      `${this.host}/catom/api/challenge/banks`,
      this.config
    );
  }
}
