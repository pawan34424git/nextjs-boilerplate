import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsersPage from "../../../pages/users/index";

describe("User List page", () => {
  it("page render", () => {
    render(<UsersPage />);
    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();
  });

  it("page render", () => {
    render(<UsersPage />);
    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();
  });
});
