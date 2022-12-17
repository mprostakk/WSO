import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import { ReactComponent as Illustration } from "../../../../assets/undraw_tree_swing_re_pqee.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

class Banner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <div className={`${this.constructor.name} box`}>
        <div className="illustration">{<Illustration />}</div>
        <div className="safe-area">
          <div className="content">
            <h2>Weekly news</h2>
            <span>23,753 Joints</span>
            <div className="more">
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Banner;
