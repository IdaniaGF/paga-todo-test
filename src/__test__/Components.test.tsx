import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useFetchData } from "./useFetchData"; // Adjust the import path as needed

// Mock Axios
const mockAxios = new MockAdapter(axios);

describe("useFetchData", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch data successfully", async () => {
    const responseData = { data: "Test data" };
    mockAxios.onAny().reply(200, responseData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("initial")
    );

    expect(result.current[1]).toBe(false);

    act(() => {
      result.current[0](() => axios.get("/test"));
    });

    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();

    expect(result.current[1]).toBe(false);
    expect(result.current[0]).toEqual({
      error: false,
      data: "Test data",
    });
  });

  it("should handle network error", async () => {
    mockAxios.onAny().networkError();

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("initial")
    );

    expect(result.current[1]).toBe(false);

    act(() => {
      result.current[0](() => axios.get("/test"));
    });

    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();

    expect(result.current[1]).toBe(false);
    expect(result.current[0]).toEqual({
      error: true,
      data: "initial",
      messageError: "Network Error",
    });
  });

  it("should handle response with error message", async () => {
    const errorMessage = "Custom error message";
    mockAxios.onAny().reply(500, { message: errorMessage });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("initial")
    );

    expect(result.current[1]).toBe(false);

    act(() => {
      result.current[0](() => axios.get("/test"));
    });

    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();

    expect(result.current[1]).toBe(false);
    expect(result.current[0]).toEqual({
      error: true,
      data: "initial",
      messageError: errorMessage,
    });
  });
});
