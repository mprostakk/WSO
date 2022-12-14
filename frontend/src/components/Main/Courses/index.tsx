import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import Course from "./Course";

class Courses extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        <h2>Courses</h2>
        {[].map((course) => (
          <Course />
        ))}
      </div>
    );
  };
}

export default Courses;
