import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import Sidebar from "./Sidebar";
import Courses from "./Courses";
import Tasks from "./Tasks";

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <main className={`${this.constructor.name}`}>
        <div className="content">
          <Courses />
          <Tasks />
        </div>
        <Sidebar />
      </main>
    );
  };
}

export default Main;
