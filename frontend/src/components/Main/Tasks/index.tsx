import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import Task from "./Task";

class Tasks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name}`}>
        <div>
          <h2>Tasks</h2>
        </div>
        {[1, 2, 3, 4, 5].map((task) => (
          <Task />
        ))}
      </div>
    );
  };
}

export default Tasks;
