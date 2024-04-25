import FetchError from "@/models/ErrorModels";
import { IUser } from "@/models/UserModels";
import client, { ClientResponse, createClient } from "@/utils/http-client";
import { getDefaultHeaders } from "@/utils/http-utils";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { CLIENT_REQUEST_TIMEOUT = 0, BASE_URL = "/" } = publicRuntimeConfig;

export const usersClientInstance = createClient({
  BASE_URL,
  CLIENT_REQUEST_TIMEOUT,
});

const { GET } = client(usersClientInstance);

export interface IUserListResponse
  extends FetchError,
    Omit<ClientResponse, "data"> {
  data?: IUser[];
}

export const getUserList: (noofRecords: number) => IUserListResponse = async (
  noofRecords
) => {
  const headers = getDefaultHeaders();
  const uri = "/employee";
  const apiUrl = `${uri}`;
  return GET(apiUrl, { headers, params: { noofRecords } });
};
