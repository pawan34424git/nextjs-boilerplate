import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import AppPage from "../../pages/_app";
import RootPage from "../../pages/index";

describe("App Page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AppPage Component={() => <RootPage />} pageProps={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("page render", () => {
    render(<AppPage Component={() => <RootPage />} pageProps={{}} />);
    const heading = screen.getByText("ROOT PAGE");
    expect(heading).toBeInTheDocument();
    expect(screen.queryByTestId("desktop-screen-nav")).toBeTruthy();

    const routeUsers = screen.getByText("Users");
    fireEvent.click(routeUsers);

    expect(screen.queryByTestId("menu-button-Users")).toBeFalsy();
    const menuButton = screen.getByTestId("menu-button");
    fireEvent.click(menuButton);
    expect(screen.queryByTestId("menu-button-Users")).toBeTruthy();

    fireEvent.click(screen.queryByTestId("menu-button-Users"));
  });
});
