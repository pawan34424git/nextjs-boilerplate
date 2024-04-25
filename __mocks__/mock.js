import MockAdapter from "axios-mock-adapter";

export default function applyMockAdapter(axiosInstance) {
  const mock = new MockAdapter(axiosInstance);

  mock.onAny().reply(200, {
    status: "Any other call will get this 😀",
    moreData: [1, 3, 4, 5],
  });
}
