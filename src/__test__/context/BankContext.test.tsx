/* import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BankContextProvider } from "../../context/BankContext";
import { useFetchData } from "../../hooks/useFetchData";
import { BankList } from "../../components/lists/BankList";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const mock = new MockAdapter(axios);
jest.mock("axios");

describe("BankContextProvider", () => {
  const mocketBankData = [
    {
      bankName: "Some name 1",
      description: "Some descrption 1",
      url: "Some url 1",
    },
    {
      bankName: "Some name 2",
      description: "Some descrption 2",
      url: "Some url 2",
    },
    {
      bankName: "Some name 3",
      description: "Some descrption 3",
      url: "Some url 3",
    },
  ];

  const sut = (
    <BankContextProvider>
      <BankList />
    </BankContextProvider>
  );

  it("fetches bank data and stores it in local storage", async () => {
    const { getByText, getByTestId } = render(sut);

    expect(useFetchData).toBeCalledTimes(1),
      // Wait for the component to finish rendering
      await waitFor(() => getByTestId("bank-list"));

    expect(localStorage.getItem).toHaveBeenCalledWith("bankList");

    act(() => {
      if (!localStorage.getItem("bankList")) {
        mock.onGet().reply(200, mocketBankData);
        expect(localStorage.setItem).toHaveBeenCalledWith(
          "bankList",
          JSON.stringify(mocketBankData)
        );
      }

      mocketBankData.forEach((el) => {
        expect(getByText(el.bankName)).toBeInTheDocument();
      });
    });
  });

  it("displays an error message if the fetch request fails", async () => {
    // Mock the axios request to return an error
    mock.onGet().reply(500, { error: "Fetch error" });

    const { getByTestId } = render(sut);

    act(() => {
      const modalError = getByTestId("modal-error");
      expect(modalError).toBeInTheDocument();
    });
  });
});
 */
