import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import X from "../../../../assets/i1.png";

class Course extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    const { accentColor } = this.props;
    return (
      <div className={`${this.constructor.name} box`}>
        <div className="illustration" style={{ backgroundColor: accentColor }}>
          <img src={X} alt={"Illustration"} />
        </div>
        <div className="details">
          <h3 className="name">Design Thinking: The Beginner's Guide</h3>
          <div className="progress-info">
            <progress value="50" max="100" style={{ accentColor }}></progress>
            <div className="details">
              <div className="property">
                <span className="key">Booked</span>
                <span className="value">27%</span>
              </div>
              <div className="property">
                <span className="key">Days</span>
                <span className="value">07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Course;
