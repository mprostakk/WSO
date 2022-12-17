import axios, { AxiosError } from "axios";
import React from "react";
import { Endpoint } from "../../types";
import { createPath } from "./helpers";
import { FetchFn, LazyFetchProps, LazyFetchState } from "./index.types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class LazyFetch<E extends Endpoint> extends React.Component<
  LazyFetchProps<E>,
  LazyFetchState<E>
> {
  public constructor(props: LazyFetchProps<E>) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  public componentDidMount(): void {
    const { onComponentDidMount } = this.props;
    onComponentDidMount && onComponentDidMount({ fetch: this.fetch });
  }

  public componentDidUpdate(
    prevProps: Readonly<LazyFetchProps<E>>,
    prevState: Readonly<LazyFetchState<E>>,
    snapshot?: any
  ): void {
    const { props, state } = this;
    if (state.isLoading !== prevState.isLoading) {
      this.handleIsLoadingChange();
    }
  }

  private handleIsLoadingChange = () => {
    const { onRequestPending, onRequestComplete } = this.props;
    const { isLoading } = this.state;
    isLoading && onRequestPending && onRequestPending();
    !isLoading && onRequestComplete && onRequestComplete();
  };

  public fetch: FetchFn<E> = async (request) => {
    const { method, rawUrl, onRequestError, onRequestSuccess } = this.props;
    const { params, body, query, headers } = request;
    const url = createPath(rawUrl, params);
    try {
      this.setState({ isLoading: true, data: undefined, error: undefined });
      await sleep(500);
      const response = await axios(
        `http://localhost:8000/api${url}${query || ""}`,
        {
          method,
          data: body ? JSON.stringify(body) : undefined,
          headers: {
            credentials: "include",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
            ...headers,
          },
        }
      );
      const { data } = response;
      this.setState({ data, error: undefined, isLoading: false });
      onRequestSuccess && onRequestSuccess(data);
      return data;
    } catch (error) {
      const axiosError: AxiosError = error as any;
      this.setState({ error: axiosError, data: undefined, isLoading: false });
      onRequestError && onRequestError(axiosError);
      return undefined;
    }
  };

  public render = () => {
    const { fetch } = this;
    const { render } = this.props;
    const { isLoading, data, error } = this.state;
    return <>{render({ fetch, isLoading, data, error })}</>;
  };
}

export default LazyFetch;
