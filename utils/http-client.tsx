import axios, {
  AxiosHeaders,
  AxiosPromise,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from "axios";

export interface ClientResponse extends AxiosPromise {}

export interface ICreateClient {
  BASE_URL: string;
  CLIENT_REQUEST_TIMEOUT: number;
  headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
}
const client = ({
  BASE_URL,
  CLIENT_REQUEST_TIMEOUT,
  headers = { Accept: "application/json", "Content-Type": "application/json" },
}: ICreateClient) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: CLIENT_REQUEST_TIMEOUT,
    headers,
  });
  return {
    GET: instance.get,
    POST: instance.post,
    PUT: instance.put,
    DELETE: instance.delete,
  };
};

export default client;
