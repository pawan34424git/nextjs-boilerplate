import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Table from "../../components/Table";

describe("Table Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Table />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("show table with default value", () => {
    render(<Table />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.queryByTestId("table")).toBeTruthy();

    const editButton = screen.getByText("edit");
    fireEvent.click(editButton);
  });

  it("will not show table", () => {
    render(<Table data={[]} />);
    expect(screen.queryByTestId("table")).toBeFalsy();
  });
});
