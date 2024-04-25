import "@testing-library/jest-dom";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import {
  mockDefaultGetUsersFail,
  mockDefaultGetUsersSuccess,
} from "../../../__mocks__/users/users.mock";
import UsersPage from "../../../pages/users/index";

describe("User List page", () => {
  afterEach(cleanup);

  it("user edit rendering", () => {
    const tree = renderer.create(<UsersPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("page table render", async () => {
    mockDefaultGetUsersSuccess();
    render(<UsersPage />);

    const heading = screen.getByText("User List");
    expect(heading).toBeInTheDocument();

    await waitFor(() => screen.getByTestId("table"));

    const tableElement = screen.getByTestId("table");
    expect(tableElement).toBeInTheDocument();

    const noDataText = screen.queryByText(/no data found/);
    expect(noDataText).not.toBeInTheDocument();

    const editButton = screen.queryAllByText(/Edit/);
    fireEvent.click(editButton[0]);
  });

  it("page table render fails", async () => {
    mockDefaultGetUsersFail();
    render(<UsersPage />);

    const noDataText = await screen.findByText(/no data found/);
    expect(noDataText).toBeInTheDocument();
  });
});
