import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import UserPhoto from "../../../../../assets/user-photo.jpg";

class Info extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name} box`}>
        <div className="photo">
          <img src={UserPhoto} alt={"User photo"} />
        </div>
        <div className="details">
          <h3>Maciej Trąbka</h3>
          <span>Student</span>
        </div>
      </div>
    );
  };
}

export default Info;
