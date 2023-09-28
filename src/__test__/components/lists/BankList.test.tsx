import { render } from "@testing-library/react";
import { BankList } from "../../../components/lists/BankList";
import { BankContext, BankContextValues } from "../../../context/BankContext";
import "@testing-library/jest-dom";

describe("BankList", () => {
  const mockedContextValues = {
    banks: [
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
    ],
    isLoading: false,
    handleError: { open: false, close: jest.fn(), message: "" },
  };

  const renderSut = (contextValues?: BankContextValues) => {
    const sut = (
      <BankContext.Provider value={contextValues || mockedContextValues}>
        <BankList />
      </BankContext.Provider>
    );
    return render(sut);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get the list of banks and render a Card for each bank from the BankContextProvider", () => {
    const { getAllByTestId } = renderSut();

    const cards = getAllByTestId("bank-card");

    expect(cards).toHaveLength(mockedContextValues.banks.length);
  });

  it.each([{ isLoading: false }, { isLoading: true }])(
    "should render a skeletonCard of length 6 when the data is Loading is $isLoading and banks is of length 0",
    ({ isLoading }) => {
      const { getAllByTestId, queryByTestId } = renderSut({
        ...mockedContextValues,
        isLoading: isLoading,
        banks: [],
      });

      const skeletons = getAllByTestId("skeleton-card");
      const cards = queryByTestId("bank-card");

      expect(skeletons).toHaveLength(6);
      expect(cards).not.toBeInTheDocument();
    }
  );

  it("Should display a modal error if the process of getting if the context return true in the open property of handle", () => {
    const { getByTestId } = renderSut({
      ...mockedContextValues,
      handleError: {
        ...mockedContextValues.handleError,
        open: true,
        message: "Some error message",
      },
    });

    const modal = getByTestId("modal-error");

    expect(modal).toBeInTheDocument();
  });
});
