import axios, {
  AxiosHeaders,
  AxiosInstance,
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
export const createClient = ({
  BASE_URL,
  CLIENT_REQUEST_TIMEOUT,
  headers = { Accept: "application/json", "Content-Type": "application/json" },
}: ICreateClient) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: CLIENT_REQUEST_TIMEOUT,
    headers,
  });
  return instance;
};

const client = (service: AxiosInstance) => {
  return {
    GET: service.get,
    POST: service.post,
    PUT: service.put,
    DELETE: service.delete,
  };
};

export default client;
