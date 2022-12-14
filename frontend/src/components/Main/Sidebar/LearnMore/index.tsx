import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

class LearnMore extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name} box`}>
        <header>
          <h3>Learn more</h3>
        </header>
        <div className="articles">
          {[1, 2, 3].map((x) => (
            <div className="article">
              <div className="illustration">
                <img
                  src={
                    "https://i.pinimg.com/564x/d1/52/41/d152412213cb0c067db482a311eb14df.jpg"
                  }
                  alt={"Article"}
                />
              </div>

              <div className="details">
                <h4>Lorem ipsum dolor sit amet consectetur...</h4>
                <span>Lorem ipsum</span>
              </div>
            </div>
          ))}
        </div>
        <div className="options">
          <div className="more">
            <span>View more</span>
            <button>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default LearnMore;
