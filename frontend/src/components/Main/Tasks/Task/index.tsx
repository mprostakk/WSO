import React from "react";
import { Props, State } from "./index.types";
import { AiFillFire } from "react-icons/ai";
import "./index.scss";

class Task extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name} box`}>
        <div className="icon">
          <img src={""} alt={""} />
        </div>
        <div className="name">
          <h4>Adobe Photoshop CC 2019 - Free Essentials Training Course</h4>
        </div>
        <div className="rate">
          <AiFillFire />
          <span>8.9</span>
        </div>
        <div className="action">
          <button type="button">View Task</button>
        </div>
        <div className="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };
}

export default Task;
