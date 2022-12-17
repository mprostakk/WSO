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
        <div>
          <h2>Courses</h2>
        </div>
        <div className="items">
          {[
            { accentColor: "rgb(255 121 164)" },
            { accentColor: "rgb(132 158 255)" },
            { accentColor: "rgb(154 255 174)" },
          ].map(({ accentColor }) => (
            <Course accentColor={accentColor} />
          ))}
        </div>
      </div>
    );
  };
}

export default Courses;
