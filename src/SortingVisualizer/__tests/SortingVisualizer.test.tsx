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
    const titulo = queryByText("Sorting Visualizer with colorines");
    expect(titulo).toBeTruthy();
  });

  it("Should render 4 buttons", () => {
    const { getAllByRole } = mount;
    const botones = getAllByRole("button");
    expect(botones).toHaveLength(4);
  });

  it("Should display an array of 255 elements on render", () => {
    const { queryAllByTitle } = mount;
    const array = queryAllByTitle("bar");
    expect(array).toHaveLength(255);
  });

  it("Should generate new array when pressing button", () => {
    const { queryByTitle } = mount;
    const botonResetArray = queryByTitle("resetArray");
    expect(botonResetArray).toBeTruthy();
    fireEvent.click;
  });
});
