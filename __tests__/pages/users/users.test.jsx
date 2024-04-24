import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsersPage from "../../../pages/users/index";

describe("Page", () => {
  it("renders a heading", () => {
    render(<UsersPage />);

    const heading = screen.getByText("User List");

    expect(heading).toBeInTheDocument();
  });
});
