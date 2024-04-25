import { clientMockAdapter } from "../mock";
import usersTestData from "./users.test.data.json";

export const mockDefaultGetUsersSuccess = () => {
  const uri = "/employee";
  clientMockAdapter
    .onGet(uri, { params: { noofRecords: 10 } })
    .reply(200, usersTestData.sucessResponse);
};

export const mockDefaultGetUsersFail = () => {
  const uri = "/employee";
  clientMockAdapter.onGet(uri, { params: { noofRecords: 10 } }).reply(404);
};
