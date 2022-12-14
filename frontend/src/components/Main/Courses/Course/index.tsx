import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";

class Course extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        <div></div>
        <div>
          <h3>Lorem ipsum</h3>
        </div>
      </div>
    );
  };
}

export default Course;
