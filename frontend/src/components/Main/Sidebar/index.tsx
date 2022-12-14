import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import Banner from "./Banner";
import User from "./User";
import LearnMore from "./LearnMore";

class Sidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        <Banner />
        <div className="sticky">
          <User />
          <LearnMore />
        </div>
      </div>
    );
  };
}

export default Sidebar;
