import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { SortingVisualizer } from "../SortingVisualizer";

describe("SortingVisualizer rendering tests", () => {
  let mount: any;

  beforeEach(() => {
    mount = render(<SortingVisualizer />);
  });

  it("Should display the title", () => {
    const { queryByText } = mount;
    const titulo = queryByText("Colorful Sort");
    expect(titulo).toBeTruthy();
  });

  it("Should render 6 buttons", () => {
    const { getAllByRole } = mount;
    const botones = getAllByRole("button");
    expect(botones).toHaveLength(4);
  });

  it("Should display an array of 255 elements on render", () => {
    const { queryAllByTestId } = mount;
    const array = queryAllByTestId("bar");
    expect(array).toHaveLength(255);
  });

  it("Should generate new array when pressing button", () => {
    const { queryByTestId } = mount;
    const botonResetArray = queryByTestId("resetArray");
    expect(botonResetArray).toBeTruthy();
    fireEvent.click;
  });
});
