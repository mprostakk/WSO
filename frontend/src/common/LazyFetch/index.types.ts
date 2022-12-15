import { Endpoint } from "./../../../../backend/src/common/index";
import { AxiosError } from "axios";

export type FetchFn = (request: {
  params?: {};
  body?: {};
  query?: {};
}) => Promise<void>;

export type LazyFetchRenderProps<E extends Endpoint> = {
  fetch: FetchFn;
  isLoading: boolean;
  error?: AxiosError;
  data?: E["response"]["body"];
};

export type LazyFetchProps<E extends Endpoint> = {
  method: E["method"];
  rawUrl: E["rawPath"];
  render: (props: LazyFetchRenderProps<E>) => React.ReactNode;
  onComponentDidMount?: (props: Pick<LazyFetchRenderProps<E>, "fetch">) => void;
  onRequestPending?: () => void;
  onRequestComplete?: () => void;
  onRequestSuccess?: (data: E["response"]["body"]) => void;
  onRequestError?: (error: AxiosError) => void;
};

export type LazyFetchState<E extends Endpoint> = {
  data?: E["response"]["body"];
  isLoading: boolean;
  error?: any;
};
