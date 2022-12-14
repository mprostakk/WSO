import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";

class Stats extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        {[1, 2, 3, 4].map((e) => (
          <div className={`stat box`}>
            <h1>24</h1>
            <span>Courses completed</span>
          </div>
        ))}
      </div>
    );
  };
}

export default Stats;
