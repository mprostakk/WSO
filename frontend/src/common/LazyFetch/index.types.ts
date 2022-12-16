import { Endpoint } from "./../../../../backend/src/common/index";
import { AxiosError } from "axios";

type IsEmptyObject<Obj extends {}> = [keyof Obj] extends [never] ? true : false;

export type FetchFn<
  E extends Endpoint,
  P extends E["request"]["params"] = E["request"]["params"],
  B extends E["request"]["body"] = E["request"]["body"],
  Q extends E["request"]["query"] = E["request"]["query"],
  WP = IsEmptyObject<P> extends true ? { params?: never } : { params: P },
  WB = IsEmptyObject<B> extends true ? { body?: never } : { body: B },
  WQ = IsEmptyObject<Q> extends true ? { query?: never } : { query: Q }
> = (
  requestPayload: WP & WB & WQ & { headers?: { [key: string]: string } }
) => Promise<E["response"]["body"] | undefined>;

export type LazyFetchRenderProps<E extends Endpoint> = {
  fetch: FetchFn<E>;
  isLoading: boolean;
  error?: AxiosError<E["response"]["body"]>;
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
