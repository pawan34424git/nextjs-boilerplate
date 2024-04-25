import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const delayResponse = 0;

export const clientMockAdapter = new MockAdapter(axios, {
  onNoMatch: "throwException",
  delayResponse,
});
