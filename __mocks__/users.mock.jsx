import MockAdapter from "axios-mock-adapter";
import usersTestData from "../__tests__/pages/users/users.test.data.json";
import { usersClientInstance } from "../services/users.endpints";

export const usersMock = new MockAdapter(usersClientInstance, {
  onNoMatch: "throwException",
  // delayResponse: 2000,
});

export const mockDefaultGetUsersSuccess = () => {
  const uri = "/employee";
  usersMock
    .onGet(uri, { params: { noofRecords: 10 } })
    .reply(200, usersTestData.sucessResponse);
};

export const mockDefaultGetUsersFail = () => {
  const uri = "/employee";
  usersMock.onGet(uri, { params: { noofRecords: 10 } }).reply(404);
};
