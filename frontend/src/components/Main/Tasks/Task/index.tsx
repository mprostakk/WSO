import React from "react";
import { Props, State } from "./index.types";
import { AiFillFire } from "react-icons/ai";
import "./index.scss";
import MonacoEditor from "react-monaco-editor";

class Task extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowDetails: false,
    };
  }

  private handleShowDetailsButton = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    this.setState({ isShowDetails: checked });
  };

  public render = () => {
    const { isShowDetails } = this.state;
    console.log(isShowDetails);

    return (
      <div className={`${this.constructor.name} box`}>
        <div className="brief">
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
            <label className="show-details">
              <input
                type="checkbox"
                checked={isShowDetails}
                onChange={this.handleShowDetailsButton}
              />
            </label>
          </div>
          <div className="options">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {isShowDetails && (
          <div className="details">
            <div>
              <div className="properties">
                <div className="property description">
                  <h4>Opis zadania</h4>
                  <p>
                    Napisz funkcję, która w argumencie otrzymuje tablicę liczb,
                    a następnie zwraca sumę.
                  </p>
                </div>
                <div className="property data-input">
                  <h4>Przykładowe wejście</h4>
                  <code>0 4 10</code>
                </div>
                <div className="property data-output">
                  <h4>Przykładowe wyjście</h4>
                  <code>14</code>
                </div>
              </div>
              <div className="solution">
                <MonacoEditor
                  language="javascript"
                  theme="vs-dark"
                  value={""}
                  options={{}}
                />
                <div className="result">
                  <button>Solve!</button>
                  <div className="unit-tests-results">
                    {[1, 2, 3, 4, 5].map((e) => (
                      <div className={`unit-test-result`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default Task;
