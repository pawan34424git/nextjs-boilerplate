import FetchError from "@/models/ErrorModels";
import { IUser } from "@/models/UserModels";
import { buildParams, getDefaultHeaders } from "@/utils/http-utils";
import axios, { AxiosPromise } from "axios";

const BASE_API_URI = "https://hub.dummyapis.com";

export interface IUserListResponse
  extends FetchError,
    Omit<AxiosPromise, "data"> {
  data?: IUser[];
}

export const getUserList: (noofRecords: number) => IUserListResponse = async (
  noofRecords
) => {
  const headers = getDefaultHeaders();
  const apiUrl = `${BASE_API_URI}/employee?${buildParams({ noofRecords })}`;
  return axios.get(apiUrl, { headers });
};
