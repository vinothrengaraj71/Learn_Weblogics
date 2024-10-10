import { act, renderHook } from "@testing-library/react";
import { UseCounter } from "../components/UseCounter";

describe("useCounter ", () => {
  it("rendering initial count 0", () => {
    const { result } = renderHook(() => UseCounter({}));
    expect(result.current.count).toBe(0);
  });
  it("should accept and render the same initial count", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 10 }));
    expect(result.current.count).toBe(10);
  });

  // increment and decrement

  it("should increment by 1", () => {
    const { result } = renderHook(() => UseCounter({}));
    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  it("should decrement by 1", () => {
    const { result } = renderHook(() => UseCounter({}));
    act(() => result.current.decrement());

    expect(result.current.count).toBe(-1);
  });
});
