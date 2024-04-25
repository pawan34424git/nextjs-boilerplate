import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: () => {
    return { push: jest.fn(), replace: jest.fn(), pathname: "/users" };
  },
}));

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    SOME_VARIABLE_HERE: "whatever-you-want-here",
  },
}));
