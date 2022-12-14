import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import Info from "./Info";
import Stats from "./Stats";

class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        <Info />
        <Stats />
      </div>
    );
  };
}

export default User;
