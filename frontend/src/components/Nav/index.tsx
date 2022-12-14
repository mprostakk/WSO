import React from "react";
import { Props, State } from "./index.types";
import "./index.scss";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiTwotoneMessage, AiTwotoneSetting } from "react-icons/ai";

class Nav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render = () => {
    return (
      <nav className={`${this.constructor.name}`}>
        <header>
          <img
            className="logo"
            src={
              "https://technischools.com/wp-content/uploads/2021/04/logoBlue-1.png"
            }
            alt={"Logo"}
          />
          <div></div>
        </header>
        <div className="menu">
          {[
            { name: "Dashboard", icon: <MdDashboard /> },
            { name: "Profile", icon: <FaUserAlt /> },
            { name: "Courses", icon: <GiSkills /> },
            { name: "Message", icon: <AiTwotoneMessage /> },
            { name: "Setting", icon: <AiTwotoneSetting /> },
          ].map((option, idx) => (
            <button className={idx === 0 ? `selected` : undefined}>
              <div className="icon">{option.icon}</div>
              <div>
                <span>{option.name}</span>
              </div>
            </button>
          ))}
        </div>
      </nav>
    );
  };
}

export default Nav;
