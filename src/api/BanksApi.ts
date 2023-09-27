import { BankModel } from "../models/Models";
import { API } from "./Abstract";

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
