import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";

class Banner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return <div className={`${this.constructor.name}`}></div>;
  };
}

export default Banner;
